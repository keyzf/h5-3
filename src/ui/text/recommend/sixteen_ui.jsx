import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class SixTeenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16} style={{ boxSize: 'border-box' }}>
        <Col
          span={24}
          style={{
            zIndex: '2',
            position: 'relative',
            transform: 'translate(0,55px)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              margin: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={24}>
          <img
            alt={'img'}
            style={{ width: '100%', height: 'auto' }}
            src={
              'http://pa797wytw.bkt.clouddn.com/%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A23%E6%8B%B7%E8%B4%9D@2x.png'
            }
          />
        </Col>
      </Row>
    );
  }
}

const sixteen_html_text = '<h3>招聘，我们是认真的</h3>';

export { SixTeenTextUi, sixteen_html_text };
