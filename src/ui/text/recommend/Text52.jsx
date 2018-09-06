import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text52 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_52_1}
        style={{
          border: ` 3px solid${
            advance.get('style_color') ? advance.get('style_color') : '#57d9ff'
          }`,
        }}
      >
        <section
          className={style.text_52_2}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }  transparent transparent  ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        />
        <section className={style.text_52_3}>
          <div className={style.text_52_4}>
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
      </section>
    );
  }
}

const text52 =
  ' 注定了，三千点将之台，无君之影。注定了，银甲披挂之身，无君之迹。早已注定，华发红颜，素手灼云，煮酒祝酒，只对月中空影，水中孤魂。只是注定了，只身一人！';
export { Text52, text52 };
