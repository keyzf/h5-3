import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text21 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section className={style.text_21_1}>
          <section>
            <section
              className={style.text_21_2}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f05454'
                }`,
              }}
            >
              <section
                className={style.text_21_3}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              />
              <section
                className={style.text_21_4}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              >
                <section
                  className={style.text_21_5}
                  style={{
                    borderColor: ` ${
                      advance.get('style_color')
                        ? advance.get('style_color')
                        : '#f05454'
                    }`,
                  }}
                />
                <section
                  className={style.text_21_6}
                  style={{
                    borderColor: ` ${
                      advance.get('style_color')
                        ? advance.get('style_color')
                        : '#f05454'
                    }`,
                  }}
                />
              </section>
              <section
                className={style.text_21_7}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              />
            </section>
            <section
              className={style.text_21_8}
              style={{
                border: ` 2px solid  ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f05454'
                }`,
              }}
            >
              <section>
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
                    <div
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
        </section>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const text21 = '输入标题';
export { Text21, text21 };
