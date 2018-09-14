import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';
class Text29 extends PureComponent {
  render() {
    return (
      <section className={style.text_29_1}>
        <section className={style.text_29_2}>
          <section className={style.text_29_3} />
          <section
            className={style.text_29_4}
            style={{
              background: `${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#39cfca'
              }`,
            }}
          >
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
                    __html: `<p style="font-size: 14px">${this.props.data.getIn(
                      ['customize', 'html_content']
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
                    __html: this.props.data.getIn([
                      'customize',
                      'html_content',
                    ]),
                  }}
                />
              </Col>
            </Row>
          </section>
          <section className={style.text_29_5} />
        </section>
      </section>
    );
  }
}

const twenty_nine_html_text = '你看到的是一个标题';
export { Text29, twenty_nine_html_text };
