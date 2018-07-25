import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./app_feature/redux/store";
import App from "./app/App";
import "./core.css";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
