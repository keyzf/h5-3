import React from "react";
import styled from "styled-components";
import { TextLayoutAtom } from "./layout_atom";

export const OneTextAtom = styled.div`
 background: url(https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A25%402x.png) no-repeat;
`;

class OneTextPreview extends React.Component {
  render() {
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    // 可编辑属性 data:为文本
    const advanced_settings = {
      // 绝对定位
      top: advance.getIn(["position", "top", "value"]),
      left: advance.getIn(["position", "left", "value"]),
      right: advance.getIn(["position", "right", "value"]),
      bottom: advance.getIn(["position", "bottom", "value"]),
      depth: advance.getIn(["position", "depth", "value"]),
      // 内边距
      pb: advance.getIn(["padding", "bottom", "value"]),
      pl: advance.getIn(["padding", "left", "value"]),
      pr: advance.getIn(["padding", "right", "value"]),
      pt: advance.getIn(["padding", "top", "value"]),
      // 颜色
      bgColor: advance.get("color"),
      //背景
      img: advance.get("img"),
      stretching: advance.getIn(["img_config", "stretching", "value"]),
      tiling: advance.getIn(["img_config", "tiling", "value"])
    };
    return (
      <TextLayoutAtom {...advanced_settings}>
        <OneTextAtom>
          <div style={{ padding: "15px 0 0 13px" }}
               dangerouslySetInnerHTML={{ __html: customize.get("html_content") }}
          />
        </OneTextAtom>
      </TextLayoutAtom>
    );
  }
}



// hoc 包装组件
export default OneTextPreview;

