import React from 'react';
import { Row, Col } from 'antd';

class OneImgUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');

    const col = number => {
      if (number === 1) {
        return 24;
      }
      if (number === 2) {
        return 12;
      }
      if (number === 3) {
        return 8;
      }
      if (number === 4) {
        return 6;
      } else {
        return null;
      }
    };

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
            <Col
              style={{ background: 'rgb(242,242,242)' }}
              key={index}
              span={col(customize.getIn(['base', 'layout', 'value']))}
            >
              {index % 2 === 0 ? (
                <React.Fragment>
                  <Col span={12}>
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
                  </Col>
                  <Col span={12}>
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
                        {data.get('title').get('value')}
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
                        }}
                      >
                        {data.getIn(['content', 'value'])}
                      </div>
                    )}
                  </Col>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Col span={12}>
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
                        {data.get('title').get('value')}
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
                        }}
                      >
                        {data.getIn(['content', 'value'])}
                      </div>
                    )}
                  </Col>
                  <Col span={12}>
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
                  </Col>
                </React.Fragment>
              )}
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { OneImgUi };
