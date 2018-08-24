import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GetUrlPara } from './app/Middleware/tool/parse_url.tool';
import {
  PreviewLoadable,
  ReleaseLoadable,
  VisualLoadable,
} from './routes/web.route';
import { access_api } from './api/access.api';

import { redux_action } from './database/redux/action';

class App extends PureComponent {
  state = { router: '' };

  componentWillMount() {
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
          <Route path={'/visual'} component={VisualLoadable} />
          <Route path={'/preview'} component={PreviewLoadable} />
          <Route path={'/release'} component={ReleaseLoadable} />
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

export default connect(
  null,
  mapDispatchToProps
)(App);
