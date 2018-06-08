import React from 'react';
import { ImgLayoutAtom } from './layout_atom';

class UpImgPreview extends React.Component {
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
        <div>
          {customize.get('item').map((data, index) => {
            return (
              <React.Fragment key={index}>
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
              </React.Fragment>
            );
          })}
        </div>
      </ImgLayoutAtom>
    );
  }
}



// hoc 包装组件
export default UpImgPreview;
