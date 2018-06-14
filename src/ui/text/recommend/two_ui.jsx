import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class TwoTextUi extends PureComponent {
  render() {
    const LayoutRow = {
      gutter: 16,
      type: 'flex',
      justify: 'center',
      align: 'center',
      style: {
        alignItems: 'center',
        height: '100%',
        overflow: 'hidden',
      },
    };
    return (
      <Row  gutter={16}>
        <Col span={15} {...LayoutRow}>
          <div
            style={{ display: ' inline' }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={9}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={
              'https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%BB%846%402x.png'
            }
            alt={'img'}
          />
        </Col>
      </Row>
    );
  }
}

const two_html_text = '<h4>急招PHP研发工程师！</h4>';

export { TwoTextUi, two_html_text };
