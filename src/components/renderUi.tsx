import * as React from "react";
import VTextUi from "../resources/text/ui/vertical";
import HTextUi from "../resources/text/ui/horizontal";

/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @returns {*}
 */
const render_ui = (data: { common: { name }, position: any, base: { html } }) => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.common.name) {
    //文本类
    case "vertical_text":
      return <VTextUi html={data.base.html}/>;
    case "horizontal_text":
      return <HTextUi html={data.base.html}/>;
  }
};


export default render_ui;