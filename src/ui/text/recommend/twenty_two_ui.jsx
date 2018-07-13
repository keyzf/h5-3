import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class TwentyTwoTextUi extends PureComponent {
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
          <Col span={6}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={'http://src.e7wei.com/0.867768670965481.png'}
              alt={'img'}
            />
          </Col>
          <Col
            span={12}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
          </Col>
          <Col span={6}>
            <img
              style={{ width: '100%', height: '100%' }}
              src={'http://src.e7wei.com/0.867768670965481.png'}
              alt={'img'}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

const twenty_two_html_text = '<h3>先领券/后购物</h3>';

export { TwentyTwoTextUi, twenty_two_html_text };
