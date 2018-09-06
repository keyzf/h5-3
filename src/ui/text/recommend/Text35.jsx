import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text35 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_35_1}>
        <section
          className={style.text_35_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            } `,
          }}
        >
          <section className={style.text_35_3}>
            <section className={style.text_35_4} />
            <section className={style.text_35_5} />
            <section className={style.text_35_6}>
              <p className={style.text_35_7}>
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
              </p>
            </section>
            <section className={style.text_35_8} />
            <section className={style.text_35_9} />
          </section>
        </section>
      </section>
    );
  }
}

const text35 =
  ' 染火枫林，琼壶歌月，长歌倚楼。岁岁年年，花前月下，一尊芳酒。水落红莲，唯闻玉磬，但此情依旧。';
export { Text35, text35 };
