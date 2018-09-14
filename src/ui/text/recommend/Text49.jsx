import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text49 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_49_1}
        style={{
          border: ` 3px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#33ebe4'
          }`,
        }}
      >
        <section className={style.text_49_2}>
          <section
            className={style.text_49_3}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
          <section
            className={style.text_49_4}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
        </section>
        <section className={style.text_49_5} />
        <section className={style.text_49_6}>
          <div className={style.text_49_7}>
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
          </div>
        </section>
        <section className={style.text_49_8}>
          <section
            className={style.text_49_9}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
          <section
            className={style.text_49_10}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text49 = '一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬';
export { Text49, text49 };
