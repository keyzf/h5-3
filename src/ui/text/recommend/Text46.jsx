import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text46 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_46_1}>
        <section className={style.text_46_2}>
          <section
            className={style.text_46_3}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section
            className={style.text_46_4}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section className={style.text_46_5} />
        </section>
        <section
          className={style.text_46_6}
          style={{
            border: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        >
          <section className={style.text_46_7}>
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
        <section className={style.text_46_8}>
          <section
            className={style.text_46_9}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section
            className={style.text_46_10}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text46 =
  '  人世间有太多的情感与归宿我们不能把握，构成了命运的不确定与爱情的不可求。在这个浮华掠影幻梦破灭的年代，对于爱情、事业、青春与梦想，我们通常只能默然相守，寂静求欢。';
export { Text46, text46 };
