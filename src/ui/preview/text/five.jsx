import React from "react";
import { TextLayoutAtom } from "./layout_atom";


class FiveTextPreview extends React.Component {
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
        <div
          style={{
            borderTop: "2px grey solid",
            borderBottom: "2px grey solid",
            padding: "5px 5px",
            overflow: "hidden"
          }}>
          <div dangerouslySetInnerHTML={{ __html: customize.get("html_content") }}/>
        </div>
      </TextLayoutAtom>
    );
  }
}

export default FiveTextPreview;

