import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { rootProps } from "./src/store/store";
import App from "./src/App";

ReactDOM.render(
  <Provider {...rootProps}>
    <App />
  </Provider>,
  document.getElementById("root")
);
