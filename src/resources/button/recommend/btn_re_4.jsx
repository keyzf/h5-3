import React from 'react';
import { ButtonAtom } from '../button_atom';

class Btn4Ui extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');

    // // 可编辑属性 data:为文本
    const advanced_settings = {
      btn_url: customize.getIn(['btn_url', 'value']),
      shadow: customize.getIn(['shadow', 'value']),
      radius: customize.getIn(['radius', 'value']),
      font_color: customize.get('font_color'),
      width: advance.get('width'),
      height: advance.get('height'),
      bg_color: customize.get('bg_color'),
      //背景
      img: advance.get('crop_img'),
      //拉伸
      stretching: advance.getIn(['img_config', 'stretching', 'value']),
      //平铺
      tiling: advance.getIn(['img_config', 'tiling', 'value']),
    };
    return (
      <a
        href={
          customize.getIn(['btn_url', 'value'])
            ? customize.getIn(['btn_url', 'value'])
            : 'javascript:void(0)'
        }
      >
        <ButtonAtom {...advanced_settings}>
          {customize.getIn(['content', 'value'])
            ? customize.getIn(['content', 'value'])
            : '去参与'}
        </ButtonAtom>
      </a>
    );
  }
}

export { Btn4Ui };
