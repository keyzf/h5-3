import React from 'react';
import { ButtonAtom } from '../button_atom';

class ButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    // // 可编辑属性 data:为文本
    const advanced_settings = {
      width: customize.getIn(['width', 'value']),
      height: customize.getIn(['height', 'value']),
      btn_url: customize.getIn(['btn_url', 'value']),
      shadow: customize.getIn(['shadow', 'value']),
      radius: customize.getIn(['radius', 'value']),
    };
    return (
      <ButtonAtom {...advanced_settings}>
        <div style={{ width: '100%', height: '100%' }}>
          {customize.get('content').get('value')
            ? customize.get('content').get('value')
            : '基础按钮'}
        </div>
      </ButtonAtom>
    );
  }
}

export { ButtonUi };
