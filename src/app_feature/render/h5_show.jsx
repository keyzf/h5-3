import React, { PureComponent } from 'react';
import RenderBg from './bg_component';
import { render_switch_ui } from './switch_ui';
import { ItemAtom } from './item_atom';
import { connect } from 'react-redux';
import { redux_action } from '../redux/action';

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
      height: this.props.bg_ui_value.data.getIn([
        'advanced',
        'height',
        'value',
      ]),
    };
    return (
      <RenderBg {...bg_config}>
        {bg_config.fixed ? (
          <div style={{ height: '100vh', width: '100%', overflow: 'auto' }}>
            {select_data.map((ui_data, index) => {
              const advanced_settings = {
                // 动画移动
                transformX: ui_data.getIn([
                  'advance',
                  'transform',
                  'translateX',
                  'value',
                ]),
                transformY: ui_data.getIn([
                  'advance',
                  'transform',
                  'translateY',
                  'value',
                ]),
                // 周长
                width: ui_data.getIn([
                  'advance',
                  'perimeter',
                  'width',
                  'value',
                ]),
                height: ui_data.getIn([
                  'advance',
                  'perimeter',
                  'height',
                  'value',
                ]),
                // 颜色
                bgColor: ui_data.getIn(['advance', 'color']),
                //背景
                img: ui_data.getIn(['advance', 'img']),
                //拉伸
                stretching: ui_data.getIn([
                  'advance',
                  'img_config',
                  'stretching',
                  'value',
                ]),
                //平铺
                tiling: ui_data.getIn([
                  'advance',
                  'img_config',
                  'tiling',
                  'value',
                ]),
              };
              return (
                <ItemAtom {...advanced_settings} key={index}>
                  {render_switch_ui(ui_data)}
                </ItemAtom>
              );
            })}
          </div>
        ) : (
          select_data.map((ui_data, index) => {
            const advanced_settings = {
              // 动画移动
              transformX: ui_data.getIn([
                'advance',
                'transform',
                'translateX',
                'value',
              ]),
              transformY: ui_data.getIn([
                'advance',
                'transform',
                'translateY',
                'value',
              ]),
              // 周长
              width: ui_data.getIn(['advance', 'perimeter', 'width', 'value']),
              height: ui_data.getIn([
                'advance',
                'perimeter',
                'height',
                'value',
              ]),
              // 颜色
              bgColor: ui_data.getIn(['advance', 'color']),
              //背景
              img: ui_data.getIn(['advance', 'img']),
              //拉伸
              stretching: ui_data.getIn([
                'advance',
                'img_config',
                'stretching',
                'value',
              ]),
              //平铺
              tiling: ui_data.getIn([
                'advance',
                'img_config',
                'tiling',
                'value',
              ]),
            };
            return (
              <ItemAtom {...advanced_settings} key={index}>
                {render_switch_ui(ui_data)}
              </ItemAtom>
            );
          })
        )}
      </RenderBg>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 背景组件样式
    bg_ui_value: state.bg_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(H5RenderCommon);
