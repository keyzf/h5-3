import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { GetUrlPara } from "./toolkit/parse_url.tool";
import { access } from "./ajax/access";
import connect from "./redux/decorator";
import { VisualLoadable } from "./routers/visual.router";
import { PreviewLoadable } from "./routers/preview.router";
import { ReleaseLoadable } from "./routers/release.router";
import { JsonLoadable } from "./routers/json.router";
import { DevelopmentLoadable } from "./routers/development.router";

/**
 * @class
 * @description
 * 程序根组件，通过解析路由，导入不同页面
 * 实现功能
 * 1. 解析路由，提取数据
 * 2. 提交ajax函数处理
 * 3. 返回相应链接
 */
@connect
class App extends PureComponent {
  state = { router: "" };

  /**
   * @description 解析访问路由
   * @function GetUrlPara
   * @description 通过 GetUrlPara 获取路由中的值,⚠️访问链接中必须存在&
   * @example
   * 示例路由：
   *     一、http://localhost:3000?state=editorH5&sid=5&guide=5 (（编辑h5页面,创建h5页面/带引导）
   *     二、http://localhost:3000?state=shareMsg&sid=5  （修改H5分享信息）
   *     三、http://localhost:3000?state=release&sid=5 (发布页展示)
   *
   * @function access
   * @description 通过 access 函数获取需要跳转到的页面
   * */
  componentWillMount() {
    const { upData, choose_upData } = this.props;
    /**
     * @description
     * 1. 解析路由，提取数据
     * */
    const analysis_data = {
      sid: GetUrlPara("sid"),
      state: GetUrlPara("state"),
      guide: GetUrlPara("guide")
    };
    /**
     * @description
     * 2. 提交ajax函数处理
     * */
    access(analysis_data, upData, choose_upData)
      .then(data => {
        /**
         * @description
         * 3.  返回相应链接
         * */
        this.setState({
          router: data
        });
      })
      .catch(error_data => {
        /**
         * @description
         * 3.  返回相应链接
         * */
        window.location.href = error_data;
      });
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
          {/** 开发模板时使用*/}
          <Route path={"/json"} component={JsonLoadable}/>
          <Route path={"/development"} component={DevelopmentLoadable}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export { App };
