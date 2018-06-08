import React from 'react';
import { ImgLayoutAtom } from './layout_atom';

class SliderImgPreview extends React.Component {

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
    const $$show_element = customize.getIn(['base','show_element','value'])
    const $$show_element_title =
      $$show_element !== undefined ? $$show_element[0] : '';
    const $$show_element_content =
      $$show_element !== undefined && $$show_element[1]
        ? $$show_element[1]
        : '';
    return (
      <ImgLayoutAtom {...advanced_settings}>
        <div
          style={{
            display: 'flex',
            width: '100%',
            overflowX: 'auto',
          }}
        >
          {customize.get('item').map((data, index) => {
            return (
              <div
                key={index}
                style={{ flex: '0 0 120px', marginRight: '2px' }}
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
                {$$show_element_title ? (
                  ''
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {data.get('title').get('value')}
                  </div>
                )}
                {$$show_element_content ? (
                  ''
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {data.get('content').get('value')}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ImgLayoutAtom>
    );
  }
}


export default SliderImgPreview;
