import React, { Component } from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  HelpLoadable,
  Html5Loadable,
  PreviewLoadable,
  ReleaseLoadable,
  VisualLoadable
} from "./routers/page_router";
import { store } from "./redux/store";
import "./core.css";

/**
 * 实际开发中，这里将作为入口
 * 1. 通过 url 分析用户当前需要进行那种操作
 * 2. 如果用户不进行选择则默认进入模板页
 */

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/*重定向，由此导入相应页面*/}
            <Route exact={true} path={"/"}>
              <Redirect to="visual" />
            </Route>
            <Route path={"/visual"} component={VisualLoadable} />
            <Route path={"/preview"} component={PreviewLoadable} />
            <Route path={"/html5"} component={Html5Loadable} />
            <Route path={"/help"} component={HelpLoadable} />
            <Route path={"/release"} component={ReleaseLoadable} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
