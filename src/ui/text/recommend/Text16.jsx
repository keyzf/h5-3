import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Tex16 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_16_1}>
        <section className={style.text_16_2}>
          <section
            className={style.text_16_3}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f96e57'
              }`,
            }}
          >
            <section className={style.text_16_4}>
              <section
                className={style.text_16_5}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section
                className={style.text_16_6}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section className={style.text_16_7}>
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
            <section className={style.text_16_8}>
              <section
                className={style.text_16_9}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section
                className={style.text_16_10}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const text16 = '火柴杆';
export { Tex16, text16 };
