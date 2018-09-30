import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./src/App";
import GetParaUrl from "./src/utils/parseUrl";

const { vid, state } = GetParaUrl(window.location.href);

ReactDOM.render(
  <App state={state} vid={vid} />,
  document.getElementById("root")
);
