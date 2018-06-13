import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 接收数据
 * 1. html 信息
 */
class FourTeenTextUi extends PureComponent {
  render() {
    const OneTextStyle = styled.div`
      background: url(http://pa797wytw.bkt.clouddn.com/8b313d35cf00b922f1e1251457d6224c%E5%89%AF%E6%9C%AC@2x.png)
        no-repeat;
    `;
    return (
      <OneTextStyle>
        <div
          style={{ padding: '15px 0 0 30px' }}
          dangerouslySetInnerHTML={{
            __html: this.props.html,
          }}
        />
      </OneTextStyle>
    );
  }
}

const fourteen_html_text =
  '<h3>关于我们</h3><h3>南京易企云软件科技有限公司</h3>';

export { FourTeenTextUi, fourteen_html_text };
