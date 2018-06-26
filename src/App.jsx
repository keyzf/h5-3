/**
 * 实际开发中，此文件将作为入口
 * 1. 通过 url 分析用户当前需要进行那种操作
 * 2. 如果用户不进行选择则默认进入模板页
 */
import React, { PureComponent } from 'react';
import axios from 'axios';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { VisualLoadable } from './routers/visual.router';
import { PreviewLoadable } from './routers/preview.router';
import { Html5Loadable } from './routers/h5.router';
import { ReleaseLoadable } from './routers/release.router';
import { GetUrlPara } from './toolkit/parse_url';
import { JsonLoadable } from './routers/json.router';
import { bg_action } from './redux/action';
import './core.css';

/**
 * 应用根组件
 */
class App extends PureComponent {
  state = {
    router: '',
  };

  /**
   * 解析路由，实现不同操作
   * 1.解析路由
   * 2. 获取状态码
   *      一、创建h5 （修改state）
   *      二、h5模板修改，将数据直接导入select_reducer中
   *      三、模板传播信息修改，将路由修改为preview，并将数据添加至用户数据中h5_reducer
   * 2.通过ajax 获取用户信息，修改state信息
   */
  componentWillMount() {
    /**
     * 通过引用路由解析函数，获取需要使用的值
     * 需要解析的值待商议，目前使用默认的（id，state）
     */
    // let recognition = GetUrlPara("id"); // 用户辨识号
    let operating = GetUrlPara('state'); // 操作码
    if (!operating) {
      this.setState({
        router: 'visual',
      });
    }
    if (operating === 'createH5') {
      this.setState({
        router: 'visual',
      });
    }
    if (operating === 'editorH5') {
      /**
       * 通过获取的数据 访问 API；
       * 获取数据后，将数据导入select_render中
       * @type {URLSearchParams}
       */
      //   let params = new URLSearchParams();
      //   params.append("user_id", recognition);
      //   axios.post("", params)
      //     .then((response) => {
      //       将获取的数据传递给核心组件中
      //       console.log("链接正确时返回", response.data);
      //       this.props.select_upData(fromJS(response.data.**),'',false)
      //          this.setState({
      //                router: "visual"
      //          });
      //     })
      //     .catch(function(error) {
      //       console.log("访问服务器错误", error);
      //     });
    }
    if (operating === 'showH5') {
      /**
       * 通过获取的数据 访问 API；
       * 获取数据后，将数据导入select_render中
       */
      //   let params = new URLSearchParams();
      //   params.append("user_id", recognition);
      axios
        .get(' http://localhost:3001/one_ui')
        .then(response => {
          console.log('链接正确时返回', response.data);
          this.props.select_upData(fromJS(response.data.ui), '', false);
          this.props.bg_upDate(fromJS(response.data.bg), '', false);
          this.setState({
            router: '/html5',
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
    }
    if (operating === 'editorUserMessage') {
      /**
       * 通过获取的数据 访问 API；
       * 获取数据后，将数据导入select_render中
       * @type {URLSearchParams}
       */
      //   let params = new URLSearchParams();
      //   params.append("user_id", recognition);
      //   axios.post("", params)
      //     .then((response) => {
      //       将获取的数据传递给核心组件中
      //       console.log("链接正确时返回", response.data);
      //       this.props.user_h5_upDate(${data})
      //          this.setState({
      //                router: "preview"
      //          });
      //     })
      //     .catch(function(error) {
      //       console.log("访问服务器错误", error);
      //     });
    }
  }

  /**
   *  渲染组件
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/*重定向，由此导入相应页面*/}
          <Route exact={true} path={'/'}>
            <Redirect to={this.state.router} />
          </Route>
          <Route path={'/visual'} component={VisualLoadable} />
          <Route path={'/preview'} component={PreviewLoadable} />
          <Route path={'/release'} component={ReleaseLoadable} />
          <Route path={'/html5'} component={Html5Loadable} />
          {/** TODO:开发环境中注释掉*/}
          <Route path={'/json'} component={JsonLoadable} />
        </Switch>
      </BrowserRouter>
    );
  }
}

/**
 * 数据更新触发器
 */
const action = (type, data) => {
  return {
    type: type,
    payload: data,
    meta: '',
    error: '',
  };
};
/**
 * 需要修改数据的数据集
 * @param dispatch
 * @returns {{select_upData: (function(*=): *), user_h5_upDate: (function(*=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: data => dispatch(action('SELECT_COMPONENTS', data)),
    user_h5_upDate: data => dispatch(action('USER_H5_MESSAGE', data)),
    bg_upDate: (data, meta, error) => dispatch(bg_action(data, meta, error)),
  };
};
/**
 * 高阶组件 hoc
 */
export default connect('', mapDispatchToProps)(App);
