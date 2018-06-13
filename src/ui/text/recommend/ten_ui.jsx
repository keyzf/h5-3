import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class TenTextUi extends PureComponent {
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
              background:
                'url(http://pa797wytw.bkt.clouddn.com/%E7%BB%8410@2x.png)',
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

const ten_html_text = '<h3 style="color: white;">都是耍流氓</h3>';

export { TenTextUi, ten_html_text };
