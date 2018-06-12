import React from "react";
import DynamicCommon from "../../../../common/dynamic_common";

/**
 * 功能：
 * 1. 选择相应组件。提供样式
 */
class VTextComponent extends React.Component {
  render() {
    // 接收的数据
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    // 拆解出的位置数据
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
      <DynamicCommon index={this.props.index} data={this.props.data} component={<div
        style={{
          border: "1px dashed black",
          boxSizing: "border-box",
          width: "100%",
          height: "100%"
        }}
      >
                      <span>
                        <div
                          style={{
                            writingMode: "vertical-rl",
                            textAlign: "center",
                            margin: "0 auto"
                          }}
                          dangerouslySetInnerHTML={{
                            __html: customize.get("html_content")
                          }}
                        />
                      </span>
      </div>} layout={advanced_settings}/>
    );
  }
}


export default VTextComponent;
