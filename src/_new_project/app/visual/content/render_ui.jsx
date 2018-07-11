import React, { PureComponent } from 'react';
import DynamicCommon from './dynamic_common';
import { switch_ui } from './switch_ui';


class RenderUI extends PureComponent {
  render() {
    // 接收的数据
    const advance = this.props.data.get('advance');
    // 拆解所有组件的高级设置
    const advanced_settings = {
      // 动画移动
      transformX: advance.getIn(['transform', 'translateX', 'value']),
      transformY: advance.getIn(['transform', 'translateY', 'value']),
      // 周长
      width: advance.getIn(['perimeter', 'width', 'value']),
      height: advance.getIn(['perimeter', 'height', 'value']),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('crop_img'),
      //拉伸
      stretching: advance.getIn(['img_config', 'stretching', 'value']),
      //平铺
      tiling: advance.getIn(['img_config', 'tiling', 'value']),
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
        component={switch_ui(this.props.data)}
      />
    );
  }
}

export default RenderUI;
