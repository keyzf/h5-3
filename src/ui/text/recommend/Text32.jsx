import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';
class Text32 extends PureComponent {
  render() {
    return (
      <section className={style.text_32_1}>
        <section className={style.text_32_2}>
          <section>
            <span
              className={style.text_32_3}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
          <section className={style.text_32_4}>
            <section
              className={style.text_32_5}
              style={{
                border: `1px solid ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
            <section className={style.text_32_8}>
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
                  <span
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
            <section
              className={style.text_32_6}
              style={{
                border: `1px solid ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
          <section>
            <span
              className={style.text_32_7}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_two_html_text = '请输入标题';
export { Text32, thirty_two_html_text };
