import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text42 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section className={style.text_42_1}>
          <section
            className={style.text_42_2}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section
            className={style.text_42_3}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_42_4}
          style={{
            border: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            }`,
          }}
        >
          <div className={style.text_42_5}>
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
        <section className={style.text_42_6}>
          <section
            className={style.text_42_7}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section
            className={style.text_42_8}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
        </section>
      </div>
    );
  }
}

const text42 =
  '  我曾听人说过，当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。——《东邪西毒》';
export { Text42, text42 };
