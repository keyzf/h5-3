import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { choose_action, select_action } from '../../../redux/action';
import { TextLayoutAtom } from './layout_atom';
import ComponentLocation from '../../../app/model/visual/component-location';

class VTextComponent extends React.Component {
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
      <TextLayoutAtom {...advanced_settings}>
        {this.props.choose ? (
          <div style={{ border: '1px grey solid' }}>
            <ComponentLocation>
              <span>
                <div
                  onClick={this.choose.bind(
                    this,
                    this.props.index,
                    this.props.data
                  )}
                  style={{
                    writingMode: 'vertical-rl',
                    textAlign: 'center',
                    margin: '0 auto',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: customize.get('html_content'),
                  }}
                />
              </span>
            </ComponentLocation>
          </div>
        ) : (
          <span>
            <ComponentLocation>
              <div
                onClick={this.choose.bind(
                  this,
                  this.props.index,
                  this.props.data
                )}
                style={{
                  writingMode: 'vertical-rl',
                  textAlign: 'center',
                  margin: '0 auto',
                }}
                dangerouslySetInnerHTML={{
                  __html: this.props.data.get('customize').get('html_content'),
                }}
              />
            </ComponentLocation>
          </span>
        )}
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
export default connect('', mapDispatchToProps)(VTextComponent);