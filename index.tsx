import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/App";
import GetParaUrl from "./src/utils/parseUrl";
import { Provider } from "mobx-react";
import store from "./src/mobx/store";
import actions from "./src/mobx/action";
import computes from "./src/mobx/computed";

const { vid, state } = GetParaUrl(window.location.href);

ReactDOM.render(
  <Provider store={store} actions={actions} computes={computes}>
    <App state={state} vid={vid} />
  </Provider>,
  document.getElementById("root")
);
