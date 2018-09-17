import * as React from "react";
import * as ReactDOM from "react-dom";
import GetParaUrl from "./src/utils/parseUrl";
import App from "./src/App";

/**
 * 调用辅助函数，获取url中的数值
 */
const UrlPara = GetParaUrl(document.location.toString());

ReactDOM.render(
  <App vid={UrlPara.vid} state={UrlPara.state}/>,
  document.getElementById("root")
);