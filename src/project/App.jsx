import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { GetUrlPara } from "./toolkit/parse_url.tool";
import { access_api } from "./api/access.api";
import { VisualLoadable } from "./router/visual.router";
import { PreviewLoadable } from "./router/preview.router";
import { ReleaseLoadable } from "./router/release.router";
import { DevelopLoadable } from "./router/develop.router";
import { $$env } from "./env";
import { DevJsonLoadable } from "./router/dev_json.router";
import { RenderH5Loadable } from "./router/render_h5";

class App extends PureComponent {
  state = { router: "" };

  componentWillMount() {
    if ($$env.get("surroundings") === "development") {
      this.setState({
        router: "visual"
      });
    }
    if ($$env.get("surroundings") === "produce") {
      access_api(
        {
          sid: GetUrlPara("sid"),
          state: GetUrlPara("state"),
          guide: GetUrlPara("guide")
        },
        this.props.upData
      )
        .then(data => {
          this.setState({
            router: data
          });
        })
        .catch(error_data => {
          window.location.href = error_data;
        });
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path={"/"}>
            <Redirect to={this.state.router}/>
          </Route>
          <Route path={"/visual"} component={VisualLoadable}/>
          <Route path={"/preview"} component={PreviewLoadable}/>
          <Route path={"/release"} component={ReleaseLoadable}/>
          <Route path={"/release"} component={RenderH5Loadable}/>
          {/*开发时使用*/}
          <Route path={"/develop"} component={DevelopLoadable}/>
          <Route path={"/json"} component={DevJsonLoadable}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export { App };
