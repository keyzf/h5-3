import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';
class Text28 extends PureComponent {
  render() {
    return (
      <section className={style.text_28_1}>
        <section className={style.text_28_2}>
          <section className={style.text_28_3}>
            <section className={style.text_28_4}>
              <section
                className={style.text_28_5}
                style={{
                  borderBottomColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderTopColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
              <section
                className={style.text_28_6}
                style={{
                  borderRightColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderLeftColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
              <section
                className={style.text_28_7}
                style={{
                  borderLeftColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderRightColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
            </section>
            <section className={style.text_28_8}>
              <section className={style.text_28_9}>
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
              </section>
            </section>
            <section className={style.text_28_10}>
              <section className={style.text_28_11}>
                <section
                  className={style.text_28_5}
                  style={{
                    borderBottomColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderTopColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
                <section
                  className={style.text_28_6}
                  style={{
                    borderRightColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderLeftColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
                <section
                  className={style.text_28_7}
                  style={{
                    borderLeftColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderRightColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const twenty_eight_html_text = '你看到的是一个标题';
export { Text28, twenty_eight_html_text };
