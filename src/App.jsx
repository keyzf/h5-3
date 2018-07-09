import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { choose_redux_action, redux_action } from './redux/action';
import { GetUrlPara } from './toolkit/parse_url';
import { VisualLoadable } from './routers/visual.router';
import { PreviewLoadable } from './routers/preview.router';
import { Html5Loadable } from './routers/h5.router';
import { ReleaseLoadable } from './routers/release.router';
import { JsonLoadable } from './routers/json.router';
import { DevelopmentLoadable } from './routers/development.router';
import { router_redirect_common } from './common/app.common';

class App extends PureComponent {
  state = { router: '' };

  componentWillMount() {
    const { upDate, choose_upDate } = this.props;
    const [id, number] = [GetUrlPara('id'), GetUrlPara('number')];
    /**
     * 更新数据源数据
     */
    upDate('USER_ID', { user_id: id, number: number });
    /**
     *  路由重定向
     */
    this.setState({
      /**
       * 解析访问路由，返回需要显示的路由地址
       * 处理函数 router_redirect_common
       * 默认链接 http://localhost:3000/?id=3&number=0&state=showH5
       */
      router: router_redirect_common(
        {
          id: id,
          number: number,
          state: GetUrlPara('state'),
          guide: GetUrlPara('guide'),
        },
        upDate,
        choose_upDate
      ),
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
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

const mapDispatchToProps = dispatch => {
  return {
    upDate: (name, data) => dispatch(redux_action(name, data)),
    choose_upDate: (name, data, meta) =>
      dispatch(choose_redux_action(name, data, meta)),
  };
};

export default connect(null, mapDispatchToProps)(App);
