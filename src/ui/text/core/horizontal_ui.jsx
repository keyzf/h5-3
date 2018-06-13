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
  '<h2 style="text-align:center;">横排文本示例</h2><p style="text-align:center;"> <h3 style="text-align:center;">上邪</h3><p style="text-align:center;"> 上邪，我欲与君相知，长命无绝衰。<br/>山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝</p>';

export { h_html_text, HTextUi };
