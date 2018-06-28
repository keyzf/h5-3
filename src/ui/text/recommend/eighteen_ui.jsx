import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class EighteenTextUi extends PureComponent {
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
              background: 'url(http://src.e7wei.com/0.5319799786349804.png)',
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

const eighteen_html_text = '<h2 style="color: white;">主办方</h2>';

export { EighteenTextUi, eighteen_html_text };
