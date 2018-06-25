import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

class GridImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const font_color = customize.getIn(['base', 'font_color']);
    // 接收一行显示数，返回应给显示的比例
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

    // 展示的数据
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
              key={index}
              span={col(customize.getIn(['base', 'layout', 'value']))}
            >
              <a
                href={data.getIn(['link', 'value'])}
                style={{ color: font_color }}
              >
                <img
                  width={
                    data.getIn(['width', 'value'])
                      ? data.getIn(['width', 'value'])
                      : '100%'
                  }
                  height={
                    data.getIn(['height', 'value'])
                      ? data.getIn(['height', 'value'])
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
              {$$show_element_title ? (
                ''
              ) : (
                <div
                  style={{
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
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
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  {data.getIn(['content', 'value'])}
                </div>
              )}
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { GridImgUi };
