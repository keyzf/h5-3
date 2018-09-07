import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';
import style from './text.module.scss';

class Text1 extends PureComponent {
  render() {
    return (
      <section className={style.text_re_1}>
        <section className={style.text_re_2}>
          <section className={style.text_re_3}>
            <section
              className={style.text_re_4}
              style={{
                borderRightColor: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#76e57b'
                }`,
              }}
            />
            <section
              className={style.text_re_5}
              style={{
                backgroundColor: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#76e57b'
                }`,
              }}
            >
              <section>
                <section className={style.text_re_6}>
                  <section>
                    <Row>
                      <Col
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 0 }}
                        xl={{ span: 0 }}
                      >
                        <div
                          style={{ whiteSpace: 'pre-wrap' }}
                          dangerouslySetInnerHTML={{
                            __html: `<p style="font-size: 14px">${this.props.data.getIn(
                              ['customize', 'html_content']
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
                            __html: this.props.data.getIn([
                              'customize',
                              'html_content',
                            ]),
                          }}
                        />
                      </Col>
                    </Row>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const text1 = '<p style="font-size: 14px">易企微一站式微信营销平台</p>';

export { Text1, text1 };
