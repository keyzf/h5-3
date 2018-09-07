import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';

class VTextUi extends PureComponent {
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
          <span
            style={{ whiteSpace: 'pre-wrap' }}
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
          <span
            style={{ whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{
              __html: this.props.html,
            }}
          />
        </Col>
      </Row>
    );
  }
}

const v_html_text = `<p style="text-align:center;font-size: 25px">竖排文本示例</p> 
   <p style="text-align:center;font-size: 20px">元日</p>
   <p style="text-align:center;font-size: 14px">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p>`;

export { v_html_text, VTextUi };
