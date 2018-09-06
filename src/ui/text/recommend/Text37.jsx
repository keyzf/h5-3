import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text37 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_37_1}>
        <section className={style.text_37_2}>
          <section className={style.text_37_3}>
            <section
              className={style.text_37_4}
              style={{
                borderTopColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderLeftColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
            <section
              className={style.text_37_5}
              style={{
                borderTopColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderRightColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
          </section>
          <section className={style.text_37_6}>
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
          <section className={style.text_37_7}>
            <section
              className={style.text_37_8}
              style={{
                borderLeftColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
            <section
              className={style.text_37_9}
              style={{
                borderRightColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_37 = '天堑无涯，绿杨陌上多离别，墙花路人暗想浮生。';
export { Text37, text_re_37 };
