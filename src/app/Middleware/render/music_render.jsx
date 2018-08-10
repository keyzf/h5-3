import React, { PureComponent } from 'react';
import RenderBg from './bg_component';
import { render_switch_ui } from './switch_ui';
import { ItemAtom } from './item_atom';
import { connect } from 'react-redux';
import { redux_action } from '../../../database/redux/action';

class MusicRenderCommon extends PureComponent {
  render() {
    const select_data = this.props.h5_data_value.data;
    return (
      <React.Fragment>
        {select_data.map((ui_data, index) => {
          const advanced_settings = {
            // 动画移动
            top: ui_data.getIn(['advance', 'top']),
            left: ui_data.getIn(['advance', 'left']),
            // 周长
            width: ui_data.getIn(['advance', 'width']),
            height: ui_data.getIn(['advance', 'height']),
            // 颜色
            bgColor: ui_data.getIn(['advance', 'color']),
            //背景
            img: ui_data.getIn(['advance', 'crop_img']),
            rotate: ui_data.getIn(['advance', 'rotate']),
            //拉伸
            stretching: ui_data.getIn([
              'advance',
              'img_config',
              'stretching',
              'value',
            ]),
            //平铺
            tiling: ui_data.getIn(['advance', 'img_config', 'tiling', 'value']),
          };
          return (
            <React.Fragment key={index}>
              {ui_data.getIn(['customize', 'type']) === 'music' ? (
                <ItemAtom
                  style={{ zIndex: '999' }}
                  {...advanced_settings}
                  key={index}
                >
                  {render_switch_ui(ui_data)}
                </ItemAtom>
              ) : (
                ''
              )}
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
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
)(MusicRenderCommon);
