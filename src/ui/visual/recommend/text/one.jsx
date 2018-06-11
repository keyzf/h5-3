import React from 'react';
import ComponentLocation from '../../../../containers/visual/component-location';
import { Map } from 'immutable';
import { choose_action, select_action } from '../../../../redux/action';
import { connect } from 'react-redux';
import { TextLayoutAtom } from '../../core/text/layout_atom';
import styled from 'styled-components';
export const OneTextAtom = styled.div`
  background: url(https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A25%402x.png)
    no-repeat;
`;

class OneTextComponent extends React.Component {
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
    // 可编辑属性 data:为文本
    const advanced_settings = {
      // 绝对定位
      top: advance.getIn(['position', 'top', 'value']),
      left: advance.getIn(['position', 'left', 'value']),
      right: advance.getIn(['position', 'right', 'value']),
      bottom: advance.getIn(['position', 'bottom', 'value']),
      depth: advance.getIn(['position', 'depth', 'value']),
      // 内边距
      pb: advance.getIn(['padding', 'bottom', 'value']),
      pl: advance.getIn(['padding', 'left', 'value']),
      pr: advance.getIn(['padding', 'right', 'value']),
      pt: advance.getIn(['padding', 'top', 'value']),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
      stretching: advance.getIn(['img_config', 'stretching', 'value']),
      tiling: advance.getIn(['img_config', 'tiling', 'value']),
    };
    return (
      <TextLayoutAtom {...advanced_settings}>
        <OneTextAtom>
          {this.props.choose ? (
            <div style={{ border: '1px grey solid' }}>
              <ComponentLocation visible={this.props.choose}>
                <div
                  style={{ padding: '15px 0 0 13px' }}
                  dangerouslySetInnerHTML={{
                    __html: customize.get('html_content'),
                  }}
                  onClick={this.choose.bind(
                    this,
                    this.props.index,
                    this.props.data
                  )}
                />
              </ComponentLocation>
            </div>
          ) : (
            <ComponentLocation>
              <div
                style={{ padding: '15px 0 0 13px' }}
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
                onClick={this.choose.bind(
                  this,
                  this.props.index,
                  this.props.data
                )}
              />
            </ComponentLocation>
          )}
        </OneTextAtom>
      </TextLayoutAtom>
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
export default connect('', mapDispatchToProps)(OneTextComponent);
