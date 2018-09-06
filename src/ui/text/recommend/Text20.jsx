import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text20 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section>
        <section
          className={style.text_20_1}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            }`,
          }}
        >
          <section className={style.text_20_2}>
            <section
              className={style.text_20_3}
              style={{
                borderLeftColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                }`,
                borderRightColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                }`,
              }}
            />
          </section>
        </section>
        <section className={style.text_20_4}>
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
    );
  }
}

const text20 = '输入标题';
export { Text20, text20 };
