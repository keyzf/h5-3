import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class TwelveTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={14}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }} dangerouslySetInnerHTML={{ __html: this.props.html }} />
        </Col>
        <Col span={10}>
          <img
            style={{width:'100%',height:"100%"}}
            src={
              'http://pa797wytw.bkt.clouddn.com/%E7%9F%A9%E5%BD%A27%E6%8B%B7%E8%B4%9D8@2x.png'
            }
            alt={'img'}
          />
        </Col>
      </Row>
    );
  }
}

const twelve_html_text = '<h3>前端开发工程师</h3>';

export { TwelveTextUi, twelve_html_text };
