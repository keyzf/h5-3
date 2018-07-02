import React, { PureComponent } from 'react';
import { RenderBgAtom } from './layout_atom';

/**
 * 背景组件
 */
class RenderBg extends PureComponent {
  render() {
    const bg_config = {
      color: this.props.color,
      img: this.props.img,
      repeat: this.props.repeat,
      fixed: this.props.fixed,
      height: this.props.height,
    };
    return (
      //背景样式组件
      <RenderBgAtom {...bg_config}>
        {/*显示背景子元素*/}
        {this.props.children}
      </RenderBgAtom>
    );
  }
}

export default RenderBg;
