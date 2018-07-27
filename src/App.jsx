import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GetUrlPara } from './app/Middleware/tool/parse_url.tool';
import {
  H5ViewLoadable,
  PreviewLoadable,
  ReleaseLoadable,
  VisualLoadable,
} from './routes/web.route';
import { access_api } from './api/access.api';

import { redux_action } from './database/redux/action';

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

/**
 * 实现功能：
 * 1. 解析路由 ，获取路由信息 （sid, guide, state）
 * 2. 调用 access_api ,传参：（sid, state）
 * 3. 如果路由解析中存在guide ，则更改guide状态 ，传递给子组件
 */
export default connect(
  null,
  mapDispatchToProps
)(
  class App extends PureComponent {
    state = { router: 'visual', guide: false };

    componentWillMount() {
      if (GetUrlPara('guide')) {
        this.setState({
          guide: true,
        });
      }
      const parseUrlData = {
        sid: GetUrlPara('sid'),
        state: GetUrlPara('state'),
      };
      access_api({ ...parseUrlData }, this.props.upData)
        .then(data => {
          this.setState({
            router: data,
          });
        })
        .catch(error => {
          window.location.href = error;
        });
    }

    render() {
      return (
        <HashRouter>
          <Switch>
            <Route exact={true} path={'/'}>
              <Redirect to={this.state.router} />
            </Route>
            <Route
              path={'/visual'}
              component={() => <VisualLoadable guide={this.state.guide} />}
            />
            <Route path={'/preview'} component={PreviewLoadable} />
            <Route path={'/release'} component={ReleaseLoadable} />
            <Route path={'/h5View'} component={H5ViewLoadable} />
          </Switch>
        </HashRouter>
      );
    }
  }
);
