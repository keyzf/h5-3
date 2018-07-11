import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { GetUrlPara } from "./toolkit/parse_url.tool";
import { access_api } from "./api/access.api";
import { VisualLoadable } from "./router/visual.router";
import { PreviewLoadable } from "./router/preview.router";
import { ReleaseLoadable } from "./router/release.router";
import { $$env } from "./env";

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export { App };
