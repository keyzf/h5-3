import React, { PureComponent } from 'react';
import { Row, Col, Button } from 'antd';

class GridMallUi extends PureComponent {
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
    let $$original = true;
    let $$img = true;
    let $$button = true;

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
        if (data === '原价') {
          $$original = false;
        }
        if (data === '图片') {
          $$img = false;
        }
        if (data === '按钮') {
          $$button = false;
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
      <Row gutter={16}>
        {customize.get('item').map((data, index) => {
          return (
            <Col
              key={index}
              span={col($$layout) ? col($$layout) : 12}
              style={{ margin: '5px 0' }}
            >
              {/*图片显示*/}
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
              {$$title ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  {data.getIn(['title', 'value'])}
                </div>
              ) : (
                ''
              )}
              {$$content ? (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: font_color,
                  }}
                >
                  {data.getIn(['content', 'value'])}
                </div>
              ) : (
                ''
              )}
              {$$current ? (
                <span style={{ marginRight: '5px', color: 'red' }}>
                  现价{data.get('current').get('value')}
                </span>
              ) : (
                ''
              )}
              {$$original ? (
                <span style={{ textDecoration: 'line-through' }}>
                  原价{data.getIn(['original', 'value'])}
                </span>
              ) : (
                ''
              )}
              {$$button ? (
                <Button style={{ width: '100%' }}>
                  {data.get('btn_content').get('value')}
                </Button>
              ) : (
                ''
              )}
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { GridMallUi };
