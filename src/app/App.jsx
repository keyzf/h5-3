import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GetUrlPara } from '../app_feature/tool/parse_url.tool';
import {
  H5ViewLoadable,
  PreviewLoadable,
  ReleaseLoadable,
  VisualLoadable,
} from './router';
import { access_api } from '../api_server/pro/access.api';

import { redux_action } from '../app_feature/redux/action';

class App extends PureComponent {
  state = { router: 'visual', guide: false };

  componentWillMount() {
    // 例：http://localhost:3000/?state=showH5&guide=3#/visual
    if (GetUrlPara('guide')) {
      this.setState({
        guide: true,
      });
    }
    const parseUrlData = {
      sid: GetUrlPara('sid'),
      state: GetUrlPara('state'),
    };
    // access_api({ ...parseUrlData }, this.props.upData)
    //   .then(data => {
    //     this.setState({
    //       router: data
    //     });
    //   })
    //   .catch(error => {
    //     window.location.href = error;
    //   });
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
          <Route path={'/renderh5'} component={H5ViewLoadable} />
        </Switch>
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect('', mapDispatchToProps)(App);
