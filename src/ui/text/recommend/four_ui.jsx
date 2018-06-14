import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class FourTextUi extends PureComponent {
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
      <div>
        <Row {...LayoutRow}>
          <Col span={4}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={
                'https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A22%402x.png'
              }
              alt={'img'}
            />
          </Col>
          <Col span={20}>
            <div
              style={{ display: ' inline' }}
              dangerouslySetInnerHTML={{ __html: this.props.html }}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const four_html_text = '<h3>时刻钟表</h3>';

export { four_html_text, FourTextUi };
