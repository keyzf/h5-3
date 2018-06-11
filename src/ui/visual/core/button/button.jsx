import React from 'react';
import { ButtonAtom } from './button_atom';
import ComponentLocation from '../../../../containers/visual/component-location';
import { Map } from 'immutable';
import { choose_action, select_action } from '../../../../redux/action';
import { connect } from 'react-redux';
class ButtonComponent extends React.Component {
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  render() {
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    // // 可编辑属性 data:为文本
    const advanced_settings = {
      width: customize.get('width').get('value'),
      height: customize.get('height').get('value'),
      btn_url: customize.get('btn_url').get('value'),
      shadow: customize.get('shadow').get('value'),
      radius: customize.get('radius').get('value'),
      // 绝对定位
      top: advance
        .get('position')
        .get('top')
        .get('value'),
      left: advance
        .get('position')
        .get('left')
        .get('value'),
      right: advance
        .get('position')
        .get('right')
        .get('value'),
      bottom: advance
        .get('position')
        .get('bottom')
        .get('value'),
      depth: advance
        .get('position')
        .get('depth')
        .get('value'),
      // 内边距
      pb: advance
        .get('padding')
        .get('bottom')
        .get('value'),
      pl: advance
        .get('padding')
        .get('left')
        .get('value'),
      pr: advance
        .get('padding')
        .get('right')
        .get('value'),
      pt: advance
        .get('padding')
        .get('top')
        .get('value'),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
    };
    return (
      <ButtonAtom {...advanced_settings}>
        {this.props.choose ? (
          <div
            style={{ border: '1px grey solid', width: '100%', height: '100%' }}
          >
            <ComponentLocation visible={this.props.choose}>
              <div
                style={{ width: '100%', height: '100%' }}
                onClick={this.choose.bind(
                  this,
                  this.props.index,
                  this.props.data
                )}
              >
                {customize.get('content').get('value')
                  ? customize.get('content').get('value')
                  : '基础按钮'}
              </div>
            </ComponentLocation>
          </div>
        ) : (
          <ComponentLocation visible={this.props.choose}>
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={this.choose.bind(
                this,
                this.props.index,
                this.props.data
              )}
            >
              {customize.get('content').get('value')
                ? customize.get('content').get('value')
                : '基础按钮'}
            </div>
          </ComponentLocation>
        )}
      </ButtonAtom>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
  };
};

// hoc 包装组件
export default connect('', mapDispatchToProps)(ButtonComponent);
