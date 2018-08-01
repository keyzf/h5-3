import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class NineTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              margin: 'auto',
              maxWidth: '310px',
              background: 'url(http://src.e7wei.com/20180615102050.png)',
              backgroundSize: '100%',
              backgroundRepeat: 'no-repeat',
            }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
      </Row>
    );
  }
}

const nine_html_text = '<h3 style="color: white;">只谈梦想的招聘</h3>';

export { NineTextUi, nine_html_text };
