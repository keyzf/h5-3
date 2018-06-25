import React from 'react';
import { ButtonAtom } from '../button_atom';

class ButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    // // 可编辑属性 data:为文本
    const advanced_settings = {
      btn_url: customize.getIn(['btn_url', 'value']),
      shadow: customize.getIn(['shadow', 'value']),
      radius: customize.getIn(['radius', 'value']),
      font_color: customize.get('font_color'),
    };
    return (
      <ButtonAtom {...advanced_settings}>
        {customize.getIn(['content', 'value'])
          ? customize.getIn(['content', 'value'])
          : '基础按钮'}
      </ButtonAtom>
    );
  }
}

export { ButtonUi };
