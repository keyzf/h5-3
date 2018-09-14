import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text10 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_10_1}>
        <section className={style.text_10_2}>
          <section
            className={style.text_10_3}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section
            className={style.text_10_4}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section
            className={style.text_10_5}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section className={style.text_10_6}>
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
        </section>
      </section>
    );
  }
}

const text10 = ' <span style="font-size:18px">请输入标题</span>';
export { Text10, text10 };
