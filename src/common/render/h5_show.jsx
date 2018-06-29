/**
 * 将组件渲染出来，
 * 包含页面（preview,h5）
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import RenderBg from './bg_component';
import { render_switch_ui } from './switch_ui';
import { ItemAtom } from './item_atom';

/**
 * 将页面渲染出来
 */
class H5RenderCommon extends PureComponent {
  render() {
    const select_data = this.props.select_value.data;
    const customize = this.props.bg_value.data.get('customize');
    // 背景属性
    const bg_config = {
      color: customize.get('color'),
      img: customize.get('crop_img'),
      repeat: customize.getIn(['img_config', 'repeat']),
      fixed: customize.getIn(['img_config', 'fixed']),
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

/**
 * 获取数据
 * @param state
 * @returns {{select_value: *, choose_value: *, bg_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    bg_value: state.bg_reducer,
  };
};

/**
 * 高阶组件
 * hoc 包装组件
 */
export default connect(mapStateToProps, '')(H5RenderCommon);
