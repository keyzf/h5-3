import React, { PureComponent } from 'react';
import style from './text.module.scss';
import { Col, Row } from 'antd';

class Text34 extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_34_1}
        style={{
          borderColor: `${
            advance.get('style_color') ? advance.get('style_color') : '#fff10c'
          } `,
        }}
      >
        <p className={style.text_34_2}>
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
        </p>
      </section>
    );
  }
}

const text34 =
  '  弯弯那婉约的心弦，有一种说不出的凄楚之美，抒写的着我们飘在空中的一曲曲化蝶的旋律，琴音清绝，曲韵悠长。';
export { Text34, text34 };
