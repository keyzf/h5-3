import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text47 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section
          className={style.text_47_1}
          style={{
            borderBottom: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        />
        <section
          className={style.text_47_2}
          style={{
            borderLeft: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        />
        <section className={style.text_47_3}>
          <div className={style.text_47_4}>
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
        <section className={style.text_47_5}>
          <section
            className={style.text_47_6}
            style={{
              borderRight: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f58fc6'
              }`,
            }}
          />
          <section
            className={style.text_47_7}
            style={{
              borderBottom: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f58fc6'
              }`,
            }}
          />
        </section>
      </div>
    );
  }
}

const text47 =
  '开满朝颜的晚秋，我可以卸掉一身倦怠，独自踏上旅途。趁晚秋未晚，我伴疏雨，轻车铁轨，我临窗静候，看车窗物景移变，幻出迷离异芒，织成一道道流光，弹落我心蒙蒙咸埃……唯有静候。晚秋。疏雨。入梦而来。';
export { Text47, text47 };
