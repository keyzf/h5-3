import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text43 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_43_1}>
        <section className={style.text_43_2}>
          <section
            className={style.text_43_3}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
          <section
            className={style.text_43_4}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
        </section>
        <section className={style.text_43_5}>
          <div className={style.text_43_6}>
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
          </div>
        </section>
        <section className={style.text_43_7}>
          <section
            className={style.text_43_8}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text43 = ' 转身，一缕冷香远，逝雪深，笑意浅。来世你渡我，可愿？';
export { Text43, text43 };
