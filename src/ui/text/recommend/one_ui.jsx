import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 接收数据
 * 1. html 信息
 */
class OneTextUi extends PureComponent {
  render() {
    const OneTextStyle = styled.div`
      background: url(http://src.e7wei.com/20180615102010.png) no-repeat;
    `;
    return (
      <OneTextStyle>
        <div
          style={{ padding: '18px 0 0 13px' }}
          dangerouslySetInnerHTML={{
            __html: this.props.html,
          }}
        />
      </OneTextStyle>
    );
  }
}

const one_html_text = '<h4>易企微,微信营销平台</h4><h4>WWW.E7WEI.COM</h4>';

export { OneTextUi, one_html_text };
