import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text2 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_2_1}>
        <section className={style.text_2_2}>
          <section
            className={style.text_2_3}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#7880c8'
              }`,
            }}
          >
            <section>
              <section className={style.text_2_4}>
                <section>
                  <section style={{ color: `${customize.get('font_color')}` }}>
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
          </section>
          <section
            className={style.text_2_5}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#7880c8'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text2 = '易企微一站式微信营销平台';
export { Text2, text2 };
