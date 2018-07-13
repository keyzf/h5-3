import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./project/redux/store";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./project/App";
import "./core.css";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
