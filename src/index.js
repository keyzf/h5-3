/**
 * 将整个程序渲染至 id 为 'root'  的 div 中
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

/**
 * 需要改将 json 中的 homepage 字段更改为访问更目录地址
 * 例如：
 *  "homepage" :'https://e7wei.com'
 */
registerServiceWorker();
