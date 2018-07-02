import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class ThreeImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const font_color = customize.getIn(['base', 'font_color']);

    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
    const $$show_element_title =
      $$show_element !== undefined ? $$show_element[0] : '';
    const $$show_element_content =
      $$show_element !== undefined && $$show_element[1]
        ? $$show_element[1]
        : '';
    return (
      <Row gutter={16}>
        {customize.get('item').map((data, index) => {
          return (
            <React.Fragment>
              {index === 0 ? (
                <Col key={index} span={24}>
                  <Col span={24}>
                    {data.getIn(['link', 'value']) === '' ? (
                      <img
                        width={
                          data.get('width').get('value')
                            ? data.get('width').get('value')
                            : '100%'
                        }
                        height={
                          data.get('height').get('value')
                            ? data.get('height').get('value')
                            : 'auto'
                        }
                        src={
                          data.get('img')
                            ? data.get('img')
                            : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                        }
                        alt={'img'}
                      />
                    ) : (
                      <a href={data.getIn(['link', 'value'])}>
                        <img
                          width={
                            data.get('width').get('value')
                              ? data.get('width').get('value')
                              : '100%'
                          }
                          height={
                            data.get('height').get('value')
                              ? data.get('height').get('value')
                              : 'auto'
                          }
                          src={
                            data.get('img')
                              ? data.get('img')
                              : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                          }
                          alt={'img'}
                        />
                      </a>
                    )}
                  </Col>
                </Col>
              ) : (
                ''
              )}
              {index === 1 ? (
                <React.Fragment>
                  <Col span={12}>
                    <Col span={24}>
                      {data.getIn(['link', 'value']) === '' ? (
                        <img
                          width={
                            data.get('width').get('value')
                              ? data.get('width').get('value')
                              : '100%'
                          }
                          height={
                            data.get('height').get('value')
                              ? data.get('height').get('value')
                              : 'auto'
                          }
                          src={
                            data.get('img')
                              ? data.get('img')
                              : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                          }
                          alt={'img'}
                        />
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
                          <img
                            width={
                              data.get('width').get('value')
                                ? data.get('width').get('value')
                                : '100%'
                            }
                            height={
                              data.get('height').get('value')
                                ? data.get('height').get('value')
                                : 'auto'
                            }
                            src={
                              data.get('img')
                                ? data.get('img')
                                : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                            }
                            alt={'img'}
                          />
                        </a>
                      )}
                    </Col>
                    <Col span={24}>
                      {$$show_element_title ? (
                        ''
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <h3 style={{ color: font_color }}>
                            {data.get('title').get('value')}
                          </h3>
                        </div>
                      )}
                      {$$show_element_content ? (
                        ''
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden',
                            color: font_color,
                          }}
                        >
                          <h4 style={{ color: font_color }}>
                            {data.getIn(['content', 'value'])}
                          </h4>
                        </div>
                      )}
                    </Col>
                  </Col>
                </React.Fragment>
              ) : (
                ''
              )}
              {index === 2 ? (
                <Col key={index} span={12}>
                  <Col span={24}>
                    {data.getIn(['link', 'value']) === '' ? (
                      <img
                        width={
                          data.get('width').get('value')
                            ? data.get('width').get('value')
                            : '100%'
                        }
                        height={
                          data.get('height').get('value')
                            ? data.get('height').get('value')
                            : 'auto'
                        }
                        src={
                          data.get('img')
                            ? data.get('img')
                            : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                        }
                        alt={'img'}
                      />
                    ) : (
                      <a href={data.getIn(['link', 'value'])}>
                        <img
                          width={
                            data.get('width').get('value')
                              ? data.get('width').get('value')
                              : '100%'
                          }
                          height={
                            data.get('height').get('value')
                              ? data.get('height').get('value')
                              : 'auto'
                          }
                          src={
                            data.get('img')
                              ? data.get('img')
                              : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                          }
                          alt={'img'}
                        />
                      </a>
                    )}
                  </Col>
                </Col>
              ) : (
                ''
              )}
            </React.Fragment>
          );
        })}
      </Row>
    );
  }
}

export { ThreeImgUi };
