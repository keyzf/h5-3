import React from "react";
import { message } from "antd";

export const component_loading = props => {
  if (props.error) {
    return message.error("部分组件未加载成功，请刷新页面");
  } else if (props.timedOut) {
    return message.warning("网速过慢，请刷新浏览器");
  } else if (props.pastDelay) {
    return "";

  } else {
    return null;
  }
};
