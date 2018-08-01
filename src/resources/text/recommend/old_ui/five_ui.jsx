import React, { PureComponent } from 'react';

/**
 * 接收数据
 * 1. html 信息
 */
class FiveTextUi extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '2px grey solid',
          borderBottom: '2px grey solid',
          padding: '5px 5px',
          overflow: 'hidden',
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
      </div>
    );
  }
}
const five_html_text = '<h3>简历投放区</h3>';

export { FiveTextUi, five_html_text };
