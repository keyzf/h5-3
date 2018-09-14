import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Tex41 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_41_1}>
        <section className={style.text_41_2}>
          <section className={style.text_41_3}>
            <span
              className={style.text_41_4}
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
        <section
          className={style.text_41_5}
          style={{
            borderTop: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            } `,
            borderBottom: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            } `,
          }}
        >
          <div className={style.text_41_6}>
            <span className={style.text_41_7}>
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
            </span>
          </div>
        </section>
        <section className={style.text_41_8}>
          <section className={style.text_41_9}>
            <span
              className={style.text_41_10}
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
      </section>
    );
  }
}

const text41 =
  '我微笑着看你来的方向，并不意味着我快乐，不眠夜，馨香若兰的气息，是对影似水的柔情';
export { Tex41, text41 };
