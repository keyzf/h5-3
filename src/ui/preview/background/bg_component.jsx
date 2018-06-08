import React from "react";
import { BgLayoutPreviewAtom } from "./layout_atom";

/**
 * 背景组件
 */
class BgPreview extends React.Component {
  render() {
    const bg_config = {
      color: this.props.color,
      img: this.props.img,
      repeat: this.props.repeat,
      fixed: this.props.fixed
    };
    console.log(bg_config);
    return (
      //背景样式组件
      <BgLayoutPreviewAtom {...bg_config}>
        {/*显示背景子元素*/}
        {this.props.children}
      </BgLayoutPreviewAtom>
    );
  }
}

export default BgPreview;
