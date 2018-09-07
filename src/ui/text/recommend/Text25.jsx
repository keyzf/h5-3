import React, { PureComponent } from 'react';
import { Col, Row } from 'antd';

class Text25 extends PureComponent {
  render() {
    return (
      <section
        style={{
          fontFamily: '&#39 microsoft YaHei&#39',
          border: '0 none',
          padding: '0',
        }}
      >
        <section style={{ marginTop: '10px', textAlign: 'center' }}>
          <section style={{ marginBottom: '0', height: '20px' }}>
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'bottom',
                fontSize: '24px',
                color: `${this.props.data.getIn(['advance', 'style_color'])}`,
                background: '#fff',
                padding: '0 5px',
                transform: 'rotate(360deg)',
              }}
            >
              ❆
            </span>
          </section>
          <section style={{ display: 'inline-block', height: '47px' }}>
            <section
              style={{
                display: 'inline-block',
                borderTop: `2px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
                padding: '10px 40px 0 40px',
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
            <section
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '-6px',
              }}
            >
              <section
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '100%',
                  border: `1px solid ${this.props.data.getIn([
                    'advance',
                    'style_color',
                  ])}`,
                }}
              />
              <section
                style={{
                  height: '2px',
                  flex: '1',
                  background: `${this.props.data.getIn([
                    'advance',
                    'style_color',
                  ])}`,
                }}
              />
              <section
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '100%',
                  border: `1px solid ${this.props.data.getIn([
                    'advance',
                    'style_color',
                  ])}`,
                }}
              />
            </section>
          </section>
          <section style={{ marginTop: '-9px', height: '15px' }}>
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                border: '5px solid transparent',
                borderTop: `10px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                border: '5px solid transparent',
                borderTop: `10px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                border: '5px solid transparent',
                borderTop: `10px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
            <span
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                border: '5px solid transparent',
                borderTop: `10px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_25 = '习俗庆典';
export { Text25, text_re_25 };
