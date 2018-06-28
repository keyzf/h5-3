/**
 * 程序入口组件
 * 通过 url 分析用户当前需要进行那种操作
 * 接收数据：
 * 1、用户 uid
 * 2、操作 状态码
 */
import React, { PureComponent } from 'react';
import axios from 'axios';
import { fromJS, Map } from 'immutable';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GetUrlPara } from './toolkit/parse_url';
import {
  bg_action,
  choose_action,
  guide_action,
  id_action,
  share_msg_action,
} from './redux/action';
import { VisualLoadable } from './routers/visual.router';
import { PreviewLoadable } from './routers/preview.router';
import { Html5Loadable } from './routers/h5.router';
import { ReleaseLoadable } from './routers/release.router';
import { JsonLoadable } from './routers/json.router';
import { DevelopmentLoadable } from './routers/development.router';
import { $$api } from './api/api.database';

/**
 * 应用根组件
 */
class App extends PureComponent {
  /**
   * 内部属性
   * @type {{router: string}}
   */
  state = {
    /**
     * 导航路由
     */
    router: '',
  };

  /**
   * 解析路由，实现不同操作
   * 1. 解析路由 （获取属性为：'id','state'）
   *    例如：
   *     一、http://localhost:3000?state=createH5&id=5 (创建h5页面)
   *     http://localhost:3000?state=createH5&id=5&guide=5 (创建h5页面,代引导)
   *     二、http://localhost:3000?state=editorH5&id=5&number=2 （编辑h5页面）
   *     三、http://localhost:3000?state=showH5&id=5&number=2  （展示h5页面）
   *     四、http://localhost:3000?state=shareMsg&id=5&number=2  （修改H5分享信息）
   * 2. 如果用户id 存在，则将用户id 存入 reducer 中
   *
   * 3. 获取状态码
   *      一、创建h5 （修改state）（ 先检查用户是否是首次使用）
   *      二、h5模板修改，将数据直接导入select_reducer中
   *      三、模板传播信息修改，将路由修改为preview，并将数据添加至用户数据中h5_reducer
   * 4.通过ajax 获取用户信息，修改state信息
   */
  componentWillMount() {
    /**
     * 通过引入工具函数，解析url
     * @type {string}
     */
    let recognition = GetUrlPara('id');
    let operating = GetUrlPara('state');
    /**
     * 如果用户 id 存在，则将id 信息存放进reducer 中
     */
    if (recognition) {
      this.props.id_upDate(fromJS({ id: recognition }), '', false);
    }
    /**
     * 如果用户操作码为 createH5
     * 1. 判断用户是否首次登陆 （修改reducer 中的值）
     * 2. 修改state中的路由地址
     */
    if (operating === 'createH5') {
      let guide = GetUrlPara('guide');
      if (guide) {
        this.props.guide_upDate(fromJS({ guide: true }), '', false);
      }
      this.setState({
        router: 'visual',
      });
    }
    /**
     *  如果用户操作码为 editorH5
     *  通过解析 url  获取相应的 数据
     *  则 数据信息 录入 核心数组中
     *  并将用户信息录入核心数组中
     */
    if (operating === 'editorH5') {
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'editorH5'])}`)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.props.choose_upDate(
              Map(),
              Map({ content: true, choose: false }),
              ''
            );
            this.setState({
              router: 'visual',
            });
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        let number = (recognition = GetUrlPara('number'));
        params.append('id', recognition);
        // number 为要获取的 模板编号
        params.append('number', number);
        axios
          .post('http://localhost:3001/one_ui', params)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.props.choose_upDate(
              Map(),
              Map({ content: true, choose: false }),
              ''
            );
            this.setState({
              router: 'visual',
            });
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
    }
    /**
     * 如果用户操作码为 showH5
     * 将数据录入核心组件，
     * 将背景信息录入组件
     */
    if (operating === 'showH5') {
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'showH5'])}`)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.setState({
              router: 'html5',
            });
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        let number = (recognition = GetUrlPara('number'));
        params.append('id', recognition);
        // number 为要获取的 模板编号
        params.append('number', number);
        axios
          .post('http://localhost:3001/one_ui', params)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.setState({
              router: 'html5',
            });
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
    }
    /**
     * 如果用户操作码为 ShareMsg
     * 将信息传递出去
     */
    if (operating === 'shareMsg') {
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'showH5'])}`)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.props.share_upDate(fromJS(response.data.share), '', false);
            this.props.choose_upDate(
              Map(),
              Map({ content: true, choose: false }),
              ''
            );
            this.setState({
              router: 'preview',
            });
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        let number = (recognition = GetUrlPara('number'));
        params.append('id', recognition);
        // number 为要获取的 模板编号
        params.append('number', number);
        axios
          .post('http://localhost:3001/one_ui', params)
          .then(response => {
            this.props.select_upData(fromJS(response.data.ui), '', false);
            this.props.bg_upDate(fromJS(response.data.bg), '', false);
            this.props.share_upDate(fromJS(response.data.share), '', false);
            this.props.choose_upDate(
              Map(),
              Map({ content: true, choose: false }),
              ''
            );
            this.setState({
              router: 'preview',
            });
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
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
          {/** 开发模板时使用*/}
          <Route path={'/json'} component={JsonLoadable} />
          <Route path={'/development'} component={DevelopmentLoadable} />
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
    choose_upDate: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    bg_upDate: (data, meta, error) => dispatch(bg_action(data, meta, error)),
    id_upDate: (data, meta, error) => dispatch(id_action(data, meta, error)),
    guide_upDate: (data, meta, error) =>
      dispatch(guide_action(data, meta, error)),
    share_upDate: (data, meta, error) =>
      dispatch(share_msg_action(data, meta, error)),
  };
};
/**
 * 高阶组件 hoc
 */
export default connect('', mapDispatchToProps)(App);
