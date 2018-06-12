import { Row, Col } from "antd";
import React from "react";
import DynamicCommon from "../../../../common/dynamic_common";
import { ThreeTextUi } from "../../../text/three_ui";

class ThreeTextComponent extends React.Component {
  render() {
    // 接收的数据
    const advance = this.props.data.get("advance");
    const customize = this.props.data.get("customize");
    // 拆解出的位置数据
    const advanced_settings = {
      // 动画移动
      transformX: advance.getIn(["transform", "translateX", "value"]),
      transformY: advance.getIn(["transform", "translateY", "value"]),
      // 周长
      width: advance.getIn(["perimeter", "width", "value"]),
      height: advance.getIn(["perimeter", "height", "value"]),
      // 颜色
      bgColor: advance.get("color"),
      //背景
      img: advance.get("img"),
      //拉伸
      stretching: advance.getIn(["img_config", "stretching", "value"]),
      //平铺
      tiling: advance.getIn(["img_config", "tiling", "value"])
    };
    const LayoutRow = {
      gutter: 16,
      type: "flex",
      justify: "center",
      align: "center",
      style: {
        alignItems: "center",
        height: "100%",
        overflow: "hidden"
      }
    };
    return (
      /**
       * 传递下去的数据包括：
       * 1. 布局组件样式 layout
       * 2. 当前组件号 index
       * 3. 接收的数据  data
       * 4. 组件 component
       * 5. 当前是否选中 choose
       */
      <DynamicCommon
        choose={this.props.choose}
        index={this.props.index}
        data={this.props.data}
        layout={advanced_settings}
        component={
          <ThreeTextUi html={customize.get("html_content")}/>
        }
      />
    );
  }
}

export default ThreeTextComponent;








