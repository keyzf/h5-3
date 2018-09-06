import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text50 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_50_1}
        style={{
          border: ` 1px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#1e9be8'
          }`,
        }}
      >
        <section
          className={style.text_50_2}
          style={{
            border: `0 none ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_3}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_4}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_50_5}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_6}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_7}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          >
            <div className={style.text_50_8}>
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
            </div>
          </section>
          <section
            className={style.text_50_9}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_10}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_50_11}
          style={{
            border: `0 none ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_12}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_13}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text50 = '乌云蔽月，人迹踪绝，说不出如斯寂寞。';
export { Text50, text50 };
