import React from "react";
import BgAtom from "./bgAtom";


interface Props {
  common: {
    type: string;
    name: string;
  };
  base: {
    img: string;
    color: string;
    height: number;
  };
}

/**
 * 背景组件
 */
class BgUi extends React.Component<Props, any> {
  render() {

    return (
      //背景样式组件
      <BgAtom {...this.props.base}>
        {this.props.children}
      </BgAtom>
    );
  }
}

export default BgUi;
