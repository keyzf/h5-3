import React, { PureComponent } from 'react';
import DynamicCommon from './dynamic_common';
import { render_ui } from '../factory/render_ui.factory';
import { NoChoose } from './ui_choose_style';

class RenderUI extends PureComponent {
  render() {
    // 接收的数据
    const advance = this.props.data.get('advance');
    const $_content = document.getElementById('content');
    let t = '';
    let h = '';
    let top = '';
    if ($_content.scrollTop) {
      t = $_content.scrollTop || $_content.body.scrollTop;
      h = $_content.clientHeight;
      top = h / 2 + t - advance.get('height') / 2;
    } else {
      top = advance.get('height') / 2;
    }
    // 拆解所有组件的高级设置
    const advanced_settings = {
      // 动画移动
      top: advance.get('top') ? advance.get('top') : top,
      left: advance.get('left')
        ? advance.get('left')
        : (320 - advance.get('width')) / 2,
      // 周长
      width: advance.get('width'),
      height: advance.get('height'),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('crop_img'),
      rotate: advance.get('rotate'),
      zIndex: advance.get('zIndex'),
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
        {this.props.data.getIn(['customize', 'type']) === 'music' ? (
          <NoChoose {...advanced_settings}>
            <div style={{ pointerEvents: 'none', userSelect: 'none' }}>
              {render_ui(this.props.data)}
            </div>
          </NoChoose>
        ) : (
          <DynamicCommon
            choose={this.props.choose}
            index={this.props.index}
            data={this.props.data}
            layout={advanced_settings}
            component={
              <div style={{ pointerEvents: 'none', userSelect: 'none' }}>
                {render_ui(this.props.data)}
              </div>
            }
          />
        )}
      </React.Fragment>
    );
  }
}

export default RenderUI;
