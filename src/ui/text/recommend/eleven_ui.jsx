import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

/**
 * 接收数据
 * 1. html 信息
 */
class ElevenTextUi extends PureComponent {
  render() {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={'http://src.e7wei.com/%E7%BB%8411@2x.png'}
            alt={'img'}
          />
        </Col>
        <Col span={12}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            dangerouslySetInnerHTML={{ __html: this.props.html }}
          />
        </Col>
        <Col span={6}>
          <img
            style={{ width: '100%', height: '100%' }}
            src={'http://src.e7wei.com/%E7%BB%8411%E6%8B%B7%E8%B4%9D@2x.png'}
            alt={'img'}
          />
        </Col>
      </Row>
    );
  }
}

const eleven_html_text = '<h3>招聘岗位</h3>';

export { ElevenTextUi, eleven_html_text };
