import React, { PureComponent } from 'react';
import DynamicCommon from './draggable/dynamic';
import { render_ui } from '../../components/renderUi';
import { redux_action } from '../../redux/action';
import connect from 'react-redux/es/connect/connect';

/**
 * 在content 栏中渲染 h5Data 中的ui 组件
 */
class CanvasUiEditor extends PureComponent {
  /**
   * 组件渲染之前，控制组件在画布中将要显示的位置
   */
  componentDidMount = () => {
    const advance = this.props.data.get('advance');
    const $_content = document.getElementById('content');
    if (advance.get('move') === false) {
      let top = '';
      // 获取合适的top值
      try {
        const t = $_content.scrollTop || $_content.body.scrollTop;
        const h = $_content.clientHeight;
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
      const $$change_move = $$change_top.setIn(['advance', 'move'], true);
      this.sendAction($$change_move);
    }
  };

  /**
   * 将新添加的组件数据，发送给renducer中存储
   * @param ui_data
   */
  sendAction = ui_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      ui_data
    );
    const $$new_choose_data = $$choose_data.set('data', ui_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const advance = this.props.data.get('advance');
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
)(CanvasUiEditor);
