import React from 'react';
import { BgLayoutAtom } from './layout_atom';

/**
 * 背景组件
 */
class BgComponent extends React.Component {
  render() {
    const bg_config = {
      color: this.props.color,
      img: this.props.img,
      height: this.props.height,
    };
    return (
      //背景样式组件
      <BgLayoutAtom {...bg_config}>{this.props.children}</BgLayoutAtom>
    );
  }
}

export default BgComponent;
