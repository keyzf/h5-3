import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class HTextUi extends PureComponent {
  render() {
    return (
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 0 }}
          xl={{ span: 0 }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `<p style="font-size: 14px">${
                this.props.html
              }</p>`.replace(new RegExp('(\\d+)px', 'g'), 'calc($1/320*100vw)'),
            }}
          />
        </Col>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 0 }}
          lg={{ span: 24 }}
          xl={{ span: 24 }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.html,
            }}
          />
        </Col>
      </Row>
    );
  }
}

const h_html_text = `<p style="text-align:center;font-size: 25px">横排文本示例</p>
   <p style="text-align:center;font-size: 14px">点左侧组件可以添加新内容</p>
   <p style="text-align:center;font-size: 14px">点一下可以进行删除等操作</p>
 `;

export { h_html_text, HTextUi };
