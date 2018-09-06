import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text51 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_51_1}>
        <section
          className={style.text_51_2}
          style={{
            border: ` 2px solid${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
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
        <section
          className={style.text_51_3}
          style={{
            borderTopColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
            }`,
            borderBottomColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
            }`,
          }}
        />
        <section className={style.text_51_4} />
      </section>
    );
  }
}

const text51 =
  '正如年年岁岁花相似，岁岁年年人不同。只道是不悔梦归处，只恨太匆匆。';
export { Text51, text51 };
