import React from "react";
import ReactDOM from "react-dom";
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import App from "./App";

/**
 * 渲染根组件
 * 将根组件渲染至 id 为 root 的 div 中
 */
ReactDOM.render(<LocaleProvider locale={zh_CN}><App/></LocaleProvider>, document.getElementById("root"));
