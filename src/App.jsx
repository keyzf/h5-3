import React, { PureComponent } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { GetUrlPara } from "./project/toolkit/parse_url.tool";
import { access_api } from "./project/api/access.api";
import { VisualLoadable } from "./project/router/visual.router";
import { PreviewLoadable } from "./project/router/preview.router";
import { ReleaseLoadable } from "./project/router/release.router";
import { DevelopLoadable } from "./project/router/develop.router";
import { DevJsonLoadable } from "./project/router/dev_json.router";
import { RenderH5Loadable } from "./project/router/renderH5.router";
import connect from "./project/redux/decorator";
import { $$env } from "./env";

@connect
class App extends PureComponent {
  state = { router: "" };

  componentWillMount() {
    /**
     * 通过解析访问的路由信息，实现不同的操作
     *
     * */
    if ($$env.get("surroundings") === "development") {
      this.setState({
        router: 'visual'
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
      <HashRouter>
        <Switch>
          <Route exact={true} path={"/"}>
            <Redirect to={this.state.router} />
          </Route>
          <Route path={"/visual"} component={VisualLoadable} />
          <Route path={"/preview"} component={PreviewLoadable} />
          <Route path={"/release"} component={ReleaseLoadable} />
          <Route path={"/renderH5"} component={RenderH5Loadable} />
          {/*开发时使用*/}
          <Route path={"/develop"} component={DevelopLoadable} />
          <Route path={"/json"} component={DevJsonLoadable} />
        </Switch>
      </HashRouter>
    );
  }
}

export { App };
