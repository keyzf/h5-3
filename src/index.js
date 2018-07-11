import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_new_project/redux/store";
import "./core.css";
import registerServiceWorker from "./registerServiceWorker";
import { App } from "./_new_project/App";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
