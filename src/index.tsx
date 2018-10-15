import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import RootStore from './store/root-store';
import App from './app/App';

ReactDOM.render(
  <Provider store={new RootStore()}>
    <App/>
  </Provider>,
  document.getElementById('root'),
);
