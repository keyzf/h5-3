import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text36 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_36_1}>
        <section
          className={style.text_36_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
          }}
        />
        <section
          className={style.text_36_3}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
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
        <section
          className={style.text_36_4}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
          }}
        />
      </section>
    );
  }
}

const text36 = ' 一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬。';
export { Text36, text36 };
