import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text7 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_7_1}>
        <p className={style.text_7_2}>
          <span
            style={{
              color: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ff8c00'
              }`,
            }}
          >
            <strong>◆</strong>
          </span>
          <strong>
            <span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            />&nbsp;<span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              ◆
            </span>&nbsp;<span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              ◆
            </span>
          </strong>
        </p>
        <div className={style.text_7_4}>
          <span className="active brush">
            <strong>
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
            </strong>
          </span>
        </div>
      </section>
    );
  }
}

const text7 = '<span style="color:#797979">快快加入易企微编辑器的大家庭</span>';
export { Text7, text7 };
