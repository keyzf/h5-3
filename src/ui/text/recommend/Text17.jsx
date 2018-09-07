import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text17 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_17_1}>
        <section
          className={style.text_17_2}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            }`,
          }}
        />
        <span className={style.text_17_3}>
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
    );
  }
}

const text17 = "<span style='color:red'>输入标题</span>";
export { Text17, text17 };
