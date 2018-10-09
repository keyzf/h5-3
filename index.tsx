import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { rootProps } from "./src/store";
import GetParaUrl from "./src/utils/parseUrl";
import App from "./src/App";

const { id, state } = GetParaUrl(window.location.href);

ReactDOM.render(
  <Provider {...rootProps}>
    <App id={id} state={state} />
  </Provider>,
  document.getElementById("root")
);
