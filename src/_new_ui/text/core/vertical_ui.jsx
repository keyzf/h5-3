import React from 'react';

class VTextUi extends React.Component {
  render() {
    return (
      <div
        style={{
          writingMode: 'vertical-rl',
          textAlign: 'center',
          margin: '0 auto',
        }}
        dangerouslySetInnerHTML={{
          __html: this.props.html,
        }}
      />
    );
  }
}

const v_html_text =
  '<h2 style="text-align:center;">竖排文本示例</h2> <h3 style="text-align:center;">元日</h3><p style="text-align:center;">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p>';

export { v_html_text, VTextUi };
