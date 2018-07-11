import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./project/redux/store";
import "./project/core.css";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./project/App";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
