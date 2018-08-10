import React, { PureComponent } from 'react';
import RenderBg from './bg_component';
import { render_switch_ui } from './switch_ui';
import { ItemAtom } from './item_atom';
import { connect } from 'react-redux';
import { redux_action } from '../../../database/redux/action';

class H5RenderCommon extends PureComponent {
  render() {
    const select_data = this.props.h5_data_value.data;
    const customize = this.props.bg_ui_value.data.get('customize');
    // 背景属性
    const bg_config = {
      color: customize.get('color'),
      img: customize.get('crop_img'),
      repeat: customize.getIn(['img_config', 'repeat']),
      fixed: customize.getIn(['img_config', 'fixed']),
      height: this.props.bg_ui_value.data.getIn(['customize', 'height']),
    };
    return (
      <RenderBg {...bg_config}>
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
            <ItemAtom {...advanced_settings} key={index}>
              {ui_data.getIn(['customize', 'type']) === 'music'
                ? ''
                : render_switch_ui(ui_data)}
            </ItemAtom>
          );
        })}
        <div
          className={'flex_center'}
          style={{
            position: 'absolute',
            bottom: 0,
            lineHeight: '30px',
          }}
        >
          <div style={{ borderRadius: '50px', background: 'rgba(0,0,0,0.4)' }}>
            <a href={'http://m.e7wei.com'} style={{ color: 'white' }}>
              &nbsp;&nbsp;&nbsp;&nbsp; 技术支持 >>
              易企微&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </div>
        </div>
      </RenderBg>
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
)(H5RenderCommon);
