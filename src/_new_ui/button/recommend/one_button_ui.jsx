import React from 'react';
import { ButtonAtom } from '../button_atom';

class OneButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    // // 可编辑属性 data:为文本
    const advanced_settings = {
      btn_url: customize.getIn(['btn_url', 'value']),
      font_color: customize.get('font_color'),
    };
    return (
      <ButtonAtom {...advanced_settings}>
        <div
          style={{
            boxShadow:
              '0 5px 20px 0 rgba(0,0,0,0.2), 0 13px 24px -11px rgba(233,30,99,0.6)',
            color: customize.get('font_color'),
            backgroundColor: '#e91e63',
            width: '100%',
            height: '100%',
          }}
        >
          {customize.getIn(['content', 'value'])
            ? customize.getIn(['content', 'value'])
            : '基础按钮'}
        </div>
      </ButtonAtom>
    );
  }
}

export { OneButtonUi };
