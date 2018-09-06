import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text48 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_48_1}>
        <section
          className={style.text_48_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        >
          <section className={style.text_48_3}>
            <section className={style.text_48_4} />
            <section className={style.text_48_5} />
            <section className={style.text_48_6}>
              <section className={style.text_48_7}>
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
            <section className={style.text_48_8} />
            <section className={style.text_48_9} />
          </section>
        </section>
      </section>
    );
  }
}

const text48 =
  '从生命的开始，见到第一缕阳光，你就一直在我身旁，和我一起成长，一起历经人生的酸甜苦辣，有时颓废，有时忧伤，你都沉默的拍拍我的肩膀；有时快乐，有时幸福，你都会飞扬的随着我手舞足蹈。';
export { Text48, text48 };
