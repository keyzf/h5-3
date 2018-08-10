import React from 'react';

class HTextUi extends React.Component {
  render() {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: this.props.html,
        }}
      />
    );
  }
}

const h_html_text =
  '<h2 style="text-align:center;">横排文本示例</h2><p style="text-align:center;">点左侧组件可以添加新内容</p><p style="text-align:center;">点一下可以进行删除等操作</p>';

export { h_html_text, HTextUi };
