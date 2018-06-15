import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class EightTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={24}>
          <img
            src={'http://src.e7wei.com/%E7%9F%A9%E5%BD%A25@2x.png'}
            alt={'img'}
          />
        </Col>
        <Col span={24}>
          <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </Col>
      </Row>
    );
  }
}

const eight_html_text = '<h3>关于我们</h3>';

export { EightTextUi, eight_html_text };
