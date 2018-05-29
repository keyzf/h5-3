import React from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import ComponentLocation from '../../../app/model/visual/component-location';
import { ImgLayoutAtom } from './layout_atom';
import { choose_action, select_action } from '../../../redux/action';

class UpImgComponent extends React.Component {
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
      <ImgLayoutAtom {...advanced_settings}>
        {this.props.choose ? (
          <div style={{ border: '1px grey solid' }}>
            <ComponentLocation visible={this.props.choose}>
              <div>
                {customize.get('item').map((data, index) => {
                  return (
                    <div
                      key={index}
                      onClick={this.choose.bind(
                        this,
                        this.props.index,
                        this.props.data
                      )}
                    >
                      <img
                        width={
                          data.get('width').get('value')
                            ? data.get('width').get('value')
                            : '100%'
                        }
                        height={
                          data.get('height').get('value')
                            ? data.get('height').get('value')
                            : 'auto'
                        }
                        src={
                          data.get('img')
                            ? data.get('img')
                            : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                        }
                        alt={'img'}
                      />
                    </div>
                  );
                })}
              </div>
            </ComponentLocation>
          </div>
        ) : (
          <ComponentLocation>
            <div>
              {customize.get('item').map((data, index) => {
                return (
                  <div
                    key={index}
                    onClick={this.choose.bind(
                      this,
                      this.props.index,
                      this.props.data
                    )}
                  >
                    <img
                      width={
                        data.get('width').get('value')
                          ? data.get('width').get('value')
                          : '100%'
                      }
                      height={
                        data.get('height').get('value')
                          ? data.get('height').get('value')
                          : 'auto'
                      }
                      src={
                        data.get('img')
                          ? data.get('img')
                          : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                      }
                      alt={'img'}
                    />
                  </div>
                );
              })}
            </div>
          </ComponentLocation>
        )}
      </ImgLayoutAtom>
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
export default connect('', mapDispatchToProps)(UpImgComponent);
