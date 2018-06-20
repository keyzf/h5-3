import React from "react";
import { message, Spin } from "antd";
import "./component.animation";

const page_loading_style = {
  style: {
    height: "100vh",
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  }
};

export const page_loading = props => {
  if (props.error) {
    return message.error("页面加载失败，请刷新浏览器");
  } else if (props.timedOut) {
    return message.warning("网速过慢，请刷新浏览器");
  } else if (props.pastDelay) {
    return <div {...page_loading_style}>
      <Spin tip={"文件正在加载中......"} size="large"/>
    </div>;
  } else {
    return null;
  }
};
