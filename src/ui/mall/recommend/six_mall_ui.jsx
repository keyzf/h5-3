import React from 'react';
import { Row, Col } from 'antd';

class SixMallUi extends React.Component {
  render() {
    // 将接收到的信息分解提取
    const customize = this.props.data.get('customize');
    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
    const $$layout = customize.getIn(['base', 'layout', 'value']);
    const font_color = customize.getIn(['base', 'font_color']);
    // 将可需要判断是否存在的属性提取出来
    let $$title = true;
    let $$content = true;
    let $$current = true;
    // eslint-disable-next-line
    let $$img = true;

    if ($$show_element !== undefined) {
      // eslint-disable-next-line
      $$show_element.map(data => {
        if (data === '标题') {
          $$title = false;
        }
        if (data === '内容') {
          $$content = false;
        }
        if (data === '现价') {
          $$current = false;
        }
        if (data === '图片') {
          $$img = false;
        }
      });
    }

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
    return (
      <Row gutter={16} style={{ margin: '3px' }}>
        {customize.get('item').map((data, index) => {
          return (
            <Col
              key={index}
              span={col($$layout) ? col($$layout) : 24}
              style={{ padding: '5px' }}
            >
              <Col
                span={24}
                style={{ border: '1px solid green', boxSizing: 'border-box' }}
              >
                {$$img ? (
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
                ) : (
                  ''
                )}
              </Col>
              <Col
                span={24}
                style={{ border: '1px solid green', boxSizing: 'border-box' }}
              >
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  {$$title ? data.getIn(['title', 'value']) : ''}
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  {$$content ? data.getIn(['content', 'value']) : ''}
                </Col>
                <Col
                  span={24}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  <h3 style={{ color: 'red' }}>
                    ￥{$$current ? data.getIn(['current', 'value']) : ''}
                  </h3>
                </Col>
              </Col>
              <br />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { SixMallUi };