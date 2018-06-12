import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 接收数据
 * 1. html 信息
 */
class OneTextUi extends PureComponent {
  render() {
    const OneTextStyle = styled.div`
      background: url(https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A25%402x.png)
        no-repeat;
    `;
    return (
      <OneTextStyle>
        <div
          style={{ padding: '15px 0 0 13px' }}
          dangerouslySetInnerHTML={{
            __html: this.props.html,
          }}
        />
      </OneTextStyle>
    );
  }
}

const one_html_text =
  '<p>这里填充标题<br/>填充补充内容填充补充内容填充补充内容</p>';

export { OneTextUi, one_html_text };
