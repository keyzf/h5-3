import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text24 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_24_1}>
        <section className={style.text_24_2}>
          <section
            className={style.text_24_3}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
          <section
            className={style.text_24_4}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
        </section>
        <section
          className={style.text_24_5}
          style={{
            border: `1px solid  ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ebe6d9'
            } `,
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ebe6d9'
            } `,
          }}
        >
          <section
            className={style.text_24_6}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          >
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
        <section className={style.text_24_2}>
          <section
            className={style.text_24_3}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
          <section
            className={style.text_24_4}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
        </section>
      </section>
    );
  }
}

const text24 = '天堑无涯，绿杨陌上多离别，墙花路人暗想浮生。';
export { Text24, text24 };
