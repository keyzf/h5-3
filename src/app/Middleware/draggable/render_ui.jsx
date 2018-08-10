import React, { PureComponent } from 'react';
import DynamicCommon from './dynamic_common';
import { render_ui } from '../factory/render_ui.factory';
import { NoChoose, UIChoose } from './ui_choose_style';
import { redux_action } from '../../../database/redux/action';
import connect from 'react-redux/es/connect/connect';
import ResizableRect from '../../../untils/resizable/ResizableRect';
import ComponentLocation from './component-location';

class RenderUI extends PureComponent {
  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    // 接收的数据
    const advance = this.props.data.get('advance');
    const $_content = document.getElementById('content');
    if (!advance.get('left')) {
      let t = '';
      let h = '';
      let top = '';
      try {
        $_content.scrollTop;
        t = $_content.scrollTop || $_content.body.scrollTop;
        h = $_content.clientHeight;
        top = h / 2 + t - advance.get('height') / 2;
      } catch (error) {
        top = advance.get('height') / 2;
      }
      // 更新width 与 height 的值
      const $$change_left = this.props.data.setIn(
        ['advance', 'left'],
        (320 - advance.get('width')) / 2
      );
      const $$change_top = $$change_left.setIn(['advance', 'top'], top);
      // new data
      this.sendAction($$change_top);
    }

    // 拆解所有组件的高级设置
    const advanced_settings = {
      // 动画移动
      top: advance.get('top'),
      left: advance.get('left'),
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

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderUI);
