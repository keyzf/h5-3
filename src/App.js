import React, { Component } from "react";
import { Provider } from "react-redux";
import { notification } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { PreviewLoadable, VisualLoadable } from "./routers/page_router";
import { store } from "./redux/store";
import "./core.css";


/**
 * 实际开发中，这里将作为入口
 * 1. 通过 url 分析用户当前需要进行那种操作
 * 2. 如果用户不进行选择则默认进入模板页
 */
class App extends Component {
  /**
   * 查询用户屏幕显示比例
   * 如果屏幕分辨率宽度低于1300则显示提示信息
   */
  componentDidMount = () => {
    if (window.screen.width < 1300) {
      notification.open({
        message: "通知",
        description: `屏幕分辨率过低,请调整视窗缩放比例。`,
        duration: 0,
      });
    }
  };

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {/*重定向，由此导入相应页面*/}
            <Route exact={true} path={"/"}>
              <Redirect to="visual"/>
            </Route>
            <Route path={"/visual"} component={VisualLoadable}/>
            <Route path={"/preview"} component={PreviewLoadable}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
