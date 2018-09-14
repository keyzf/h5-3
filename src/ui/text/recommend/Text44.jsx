import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text44 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_44_1}
        style={{
          border: ` 2px dashed  ${
            advance.get('style_color') ? advance.get('style_color') : '#33ebe4'
          }`,
        }}
      >
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
                __html: `<p style="font-size: 14px">${customize.get(
                  'html_content'
                )}</p>`.replace(
                  new RegExp('(\\d+)px', 'g'),
                  'calc($1/320*100vw)'
                ),
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
                __html: customize.get('html_content'),
              }}
            />
          </Col>
        </Row>
      </section>
    );
  }
}

const text44 =
  '站在高高的神坛上，俯瞰人生，没看到世间其乐融融，只看到哀思遍地，忧伤漫天，美丽如雪般凋零，淡漠如烟般飘散。';
export { Text44, text44 };
