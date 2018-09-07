import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text4 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    return (
      <section>
        <section className={style.text_4_1}>
          <span className={style.text_4_2} />
          <span className={style.text_4_4}>
            <span className={style.text_4_4} />
            <span className={style.text_4_5} />
          </span>
        </section>
        <section className={style.text_4_6}>
          <span>
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
        </section>
      </section>
    );
  }
}

const text4 = '<h3>请输入标题</h3>';
export { Text4, text4 };
