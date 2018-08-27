import React, { PureComponent } from 'react';

import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { GetUrlPara } from './app/Middleware/tool/parse_url.tool';
import {
  PreviewLoadable,
  ReleaseLoadable,
  VisualLoadable,
} from './routes/web.route';

export default class App extends PureComponent {
  state = { router: '' };

  componentWillMount() {
    switch (GetUrlPara('state')) {
      case 'h5View':
        this.setState({
          router: 'release',
        });
        return '';
      case 'editorH5':
        this.setState({
          router: 'visual',
        });
        return '';
      case 'shareMsg':
        this.setState({
          router: 'preview',
        });
        return '';
      default:
        return (window.location.href = 'http://my.e7wei.com/404.html');
    }
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
            component={() => (
              <VisualLoadable
                sid={GetUrlPara('sid')}
                state={GetUrlPara('state')}
              />
            )}
          />
          <Route
            path={'/preview'}
            component={() => (
              <PreviewLoadable
                sid={GetUrlPara('sid')}
                state={GetUrlPara('state')}
              />
            )}
          />
          <Route
            path={'/release'}
            component={() => (
              <ReleaseLoadable
                sid={GetUrlPara('sid')}
                state={GetUrlPara('state')}
              />
            )}
          />
        </Switch>
      </HashRouter>
    );
  }
}
