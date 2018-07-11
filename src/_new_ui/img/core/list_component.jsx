import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class ListImgUi extends PureComponent {
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
    const font_color = customize.getIn(['base', 'font_color']);
    console.log(customize, font_color);
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
              style={{ margin: '5px 0' }}
              key={index}
              span={col(customize.getIn(['base', 'layout', 'value']))}
            >
              <Col span={12}>
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
                      data.get('crop_img')
                        ? data.get('crop_img')
                        : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                    }
                    alt={'img'}
                  />
                ) : (
                  <a
                    href={data.getIn(['link', 'value'])}
                    style={{ color: font_color }}
                  >
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
                        data.get('crop_img')
                          ? data.get('crop_img')
                          : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                      }
                      alt={'img'}
                    />
                  </a>
                )}
                <br />
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
                      alignCenter: 'center',
                      color: font_color,
                    }}
                  >
                    {data.getIn(['title', 'value'])}
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
                      alignCenter: 'center',
                      color: font_color,
                    }}
                  >
                    {data.getIn(['content', 'value'])}
                  </div>
                )}
              </Col>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { ListImgUi };