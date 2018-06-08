import React from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import ComponentLocation from '../../../../containers/visual/component-location';
import { ImgLayoutAtom } from './layout_atom';
import { choose_action, select_action } from '../../../../redux/action';

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
      top: advance.getIn(["position", "top", "value"]),
      left: advance.getIn(["position", "left", "value"]),
      right: advance.getIn(["position", "right", "value"]),
      bottom: advance.getIn(["position", "bottom", "value"]),
      depth: advance.getIn(["position", "depth", "value"]),
      // 内边距
      pb: advance.getIn(["padding", "bottom", "value"]),
      pl: advance.getIn(["padding", "left", "value"]),
      pr: advance.getIn(["padding", "right", "value"]),
      pt: advance.getIn(["padding", "top", "value"]),
      // 颜色
      bgColor: advance.get("color"),
      //背景
      img: advance.get("img"),
      stretching: advance.getIn(["img_config", "stretching", "value"]),
      tiling: advance.getIn(["img_config", "tiling", "value"])
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
                          data.getIn(['width','value'])
                            ?  data.getIn(['width','value'])
                            : '100%'
                        }
                        height={
                          data.getIn(['height','value'])
                            ?   data.getIn(['height','value'])
                            : 'auto'
                        }
                        src={
                          data.get('img')
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
                        data.getIn(['width','value'])
                          ? data.getIn(['width','value'])
                          : '100%'
                      }
                      height={
                        data.getIn(['height','value'])
                          ? data.getIn(['height','value'])
                          : 'auto'
                      }
                      src={data.get('img')}
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
