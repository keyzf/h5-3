import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';

class Text27 extends PureComponent {
  render() {
    return (
      <section
        style={{
          fontFamily: '&quot;microsoft YaHei&quot',
          marginTop: '10px',
          border: '0 none',
          padding: '0',
        }}
      >
        <section style={{ textAlign: 'center' }}>
          <section
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <section
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
            <section
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
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
            <section
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
                marginLeft: '5px',
              }}
            />
            <section
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_27 = '维护贴士';
export { Text27, text_re_27 };
