import React, { PureComponent } from 'react';
import DynamicCommon from './dynamic_common';
import { render_ui } from '../factory/render_ui.factory';

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
      <React.Fragment>
        {this.props.data.getIn(['customize', 'type']) === 'com' ? (
          this.props.data.getIn(['customize', 'ui']).map((data, index) => {
            return (
              <DynamicCommon
                key={index}
                com_key={index}
                choose={index === this.props.show}
                index={index}
                data={data}
                layout={advanced_settings}
                component={render_ui(data)}
              />
            );
          })
        ) : (
          <DynamicCommon
            choose={this.props.choose}
            index={this.props.index}
            data={this.props.data}
            layout={advanced_settings}
            component={render_ui(this.props.data)}
          />
        )}
      </React.Fragment>
    );
  }
}

export default RenderUI;
