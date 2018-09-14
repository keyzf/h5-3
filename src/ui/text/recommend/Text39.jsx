import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text39 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_39_1}>
        <section className={style.text_39_2}>
          <section className={style.text_39_3}>
            <section
              className={style.text_39_4}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#57d9ff'
                } `,
              }}
            />
            <section
              className={style.text_39_5}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#57d9ff'
                } `,
              }}
            />
          </section>
          <section
            className={style.text_39_6}
            style={{
              border: ` 2px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              } `,
            }}
          >
            <div className={style.text_39_7}>
              <span className={style.text_39_8}>
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
        </section>
      </section>
    );
  }
}

const text39 =
  '              秋夜冷峻云烟，渐次消褪，淡淡的月色，透过密集摇叶的缝隙，洒下斑驳的光点。摇曳着月影的婆娑，忽明忽暗，遥指苍穹，蓝色的天幕上散落着点点寒星。月色在灵动的云层间游弋，忽隐忽现、瞬息万变，呈现出无限的遐想..';
export { Text39, text39 };
