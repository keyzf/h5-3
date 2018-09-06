import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';
class Text33 extends PureComponent {
  render() {
    return (
      <section className={style.text_33_1}>
        <section className={style.text_33_2}>
          <section
            className={style.text_33_3}
            style={{
              border: `1px solid ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
              }`,
            }}
          />
          <section
            className={style.text_33_4}
            style={{
              border: `1px solid ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
              }`,
            }}
          />
          <section
            className={style.text_33_5}
            style={{
              color: ` ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
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
                <div
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.getIn([
                      'customize',
                      'html_content',
                    ]),
                  }}
                />
              </Col>
            </Row>

            <span
              className={style.text_33_6}
              style={{
                borderLeft: ` 15px  ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#19254d'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_three_html_text = '请输入标题';
export { Text33, thirty_three_html_text };
