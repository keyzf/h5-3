import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { App } from "./App";
import "./core.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

/**
 * 将package.json中'homepage'字段内容更改为 访问根目录地址
 * 例："homepage" :'https://e7wei.com'
 */
registerServiceWorker();
