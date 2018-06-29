/**
 * 程序入口组件
 * 通过 url 分析用户当前需要进行那种操作
 * 接收数据：
 * 1、用户 uid
 * 2、操作 状态码
 */
import React, { PureComponent } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { choose_redux_action, redux_action } from "./redux/action";
import { GetUrlPara } from "./toolkit/parse_url";
import { VisualLoadable } from "./routers/visual.router";
import { PreviewLoadable } from "./routers/preview.router";
import { Html5Loadable } from "./routers/h5.router";
import { ReleaseLoadable } from "./routers/release.router";
import { JsonLoadable } from "./routers/json.router";
import { DevelopmentLoadable } from "./routers/development.router";
import { $$api } from "./api/api.database";

/**
 * 应用根组件
 */
class App extends PureComponent {
  state = {
    /**
     * 导航路由
     */
    router: ""
  };

  /**
   * 测试路由
   *     一、http://localhost:3000?state=createH5&id=5 (创建h5页面)
   *     http://localhost:3000?state=createH5&id=5&guide=5 (创建h5页面,代引导)
   *     二、http://localhost:3000?state=editorH5&id=5&number=2 （编辑h5页面）
   *     三、http://localhost:3000?state=showH5&id=5&number=2  （展示h5页面）
   *     四、http://localhost:3000?state=shareMsg&id=5&number=2  （修改H5分享信息）
   */
  componentWillMount() {
    const { upDate, choose_upDate } = this.props;
    const [user_id, user_state, guide, number] = [
      GetUrlPara("id"),
      GetUrlPara("state"),
      GetUrlPara("guide"),
      GetUrlPara("number")
    ];
    /**
     *  获取用户id
     *  示例路由：http://localhost:3000?state=createH5&id=5
     */
    if (user_id) {
      upDate("USER_ID", { user_id: user_id });
    }
    /**
     * 页面跳转至visual
     * 示例路由 ：http://localhost:3000?state=createH5&id=5&guide=5
     */
    if (user_state === "createH5") {
      /**
       * 判断是否启引导
       * 示例路由 http://localhost:3000?state=createH5&id=5&guide=5
       */
      if (guide) {
        upDate("GUIDE", { guide: true });
      }
      this.setState({
        router: "visual"
      });
    }
    /**
     * 页面跳转至visual
     * 示例路由 http://localhost:3000?state=editorH5&id=5&number=2
     *
     */
    if (user_state === "editorH5") {
      if ($$api.get("surroundings") === "development") {
        axios
          .get(`${$$api.getIn(["development", "editorH5"])}`)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            choose_upDate(
              "CHOOSE_UI",
              { number: "" },
              { content: true, choose: false }
            );
            this.setState({
              router: "visual"
            });
          });
      }
      if ($$api.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("id", user_id);
        params.append("number", number);
        axios
          .post(`${$$api.getIn(["produce", "editorH5"])}`, params)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            choose_upDate(
              "CHOOSE_UI",
              { number: "" },
              { content: true, choose: false }
            );
            this.setState({
              router: "visual"
            });
          })
          .catch(function(error) {
            console.log("访问服务器错误", error);
          });
      }
    }
    /**
     * 跳转至 showH5
     * 路由示例：http://localhost:3000?state=showH5&id=5&number=2
     */
    if (user_state === "showH5") {
      if ($$api.get("surroundings") === "development") {
        axios
          .get(`${$$api.getIn(["development", "showH5"])}`)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            this.setState({
              router: "html5"
            });
          });
      }
      if ($$api.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("id", user_id);
        params.append("number", number);
        axios
          .post(`${$$api.getIn(["produce", "showH5"])}`, params)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            this.setState({
              router: "html5"
            });
          })
          .catch(function(error) {
            console.log("访问服务器错误", error);
          });
      }
    }
    /**
     * 跳转至 preview
     * 路由示例：http://localhost:3000?state=shareMsg&id=5&number=2
     */
    if (user_state === "shareMsg") {
      if ($$api.get("surroundings") === "development") {
        axios
          .get(`${$$api.getIn(["development", "showH5"])}`)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            choose_upDate(
              "CHOOSE_UI",
              { number: "" },
              { content: true, choose: false }
            );
            upDate("SHARE_MSG", response.data.share);
            this.setState({
              router: "preview"
            });
          });
      }
      if ($$api.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("id", user_id);
        params.append("number", number);
        axios
          .post(`${$$api.getIn(["produce", "showH5"])}`, params)
          .then(response => {
            upDate("H5_DATA", response.data.ui);
            upDate("BG_UI", response.data.bg);
            choose_upDate(
              "CHOOSE_UI",
              { number: "" },
              { content: true, choose: false }
            );
            upDate("SHARE_MSG", response.data.share);
            this.setState({
              router: "preview"
            });
          })
          .catch(function(error) {
            console.log("访问服务器错误", error);
          });
      }
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*重定向，由此导入相应页面*/}
          <Route exact={true} path={"/"}>
            <Redirect to={this.state.router}/>
          </Route>
          <Route path={"/visual"} component={VisualLoadable}/>
          <Route path={"/preview"} component={PreviewLoadable}/>
          <Route path={"/release"} component={ReleaseLoadable}/>
          <Route path={"/html5"} component={Html5Loadable}/>
          {/** 开发模板时使用*/}
          <Route path={"/json"} component={JsonLoadable}/>
          <Route path={"/development"} component={DevelopmentLoadable}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

/**
 * 需要修改数据的数据集
 * @param dispatch
 * @returns {{select_upData: (function(*=): *), user_h5_upDate: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    // 修改数据信息
    upDate: (name, data) => dispatch(redux_action(name, data)),
    // 当前选择ui
    choose_upDate: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta))
  };
};

/**
 * 高阶组件 hoc
 */
export default connect("", mapDispatchToProps)(App);
