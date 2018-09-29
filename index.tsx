import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/App";
import GetParaUrl from "./src/utils/parseUrl";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const { vid, state } = GetParaUrl(window.location.href);

ReactDOM.render(
  <Provider store={store}>
    <App state={state} vid={vid} />
  </Provider>,
  document.getElementById("root")
);
