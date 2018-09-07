import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text5 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_5_1}>
        <section
          className={style.text_5_2}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ff8c00'
            }`,
          }}
        >
          <div className={style.text_5_3}>
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
      </section>
    );
  }
}

const text5 = '<span style="color:#ff8c00;font-size:36px">E7WEI.COM</span>';
export { Text5, text5 };
