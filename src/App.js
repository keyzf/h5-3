/**
 * 实际开发中，此文件将作为入口
 * 1. 通过 url 分析用户当前需要进行那种操作
 * 2. 如果用户不进行选择则默认进入模板页
 */
import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { store } from "./redux/store";
import { VisualLoadable } from "./routers/visual.router";
import { PreviewLoadable } from "./routers/preview.router";
import { Html5Loadable } from "./routers/h5.router";
import { ReleaseLoadable } from "./routers/release.router";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {/*重定向，由此导入相应页面*/}
            <Route exact={true} path={"/"}>
              <Redirect to="visual"/>
            </Route>
            <Route path={"/visual"} component={VisualLoadable}/>
            <Route path={"/preview"} component={PreviewLoadable}/>
            <Route path={"/release"} component={ReleaseLoadable}/>
            <Route path={"/html5"} component={Html5Loadable}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
