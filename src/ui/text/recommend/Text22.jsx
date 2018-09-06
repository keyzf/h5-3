import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text22 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_22_1}>
        <section className={style.text_22_2}>
          <section className={style.text_22_3}>
            <p
              style={{
                color: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              <span className={style.text_22_4}>﹁</span>
            </p>
            <p>
              <span className={style.text_22_5}>
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
              </span>
            </p>
            <p
              style={{
                color: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              <span className={style.text_22_4}>﹂</span>
            </p>
          </section>
        </section>
      </section>
    );
  }
}

const text22 = '一站式微信营销平台';
export { Text22, text22 };
