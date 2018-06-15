import React from 'react';
import { Row, Col, Button } from 'antd';

class OneMallUi extends React.Component {
  render() {
    // 将接收到的信息分解提取
    const customize = this.props.data.get('customize');
    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
    const $$layout = customize.getIn(['base', 'layout', 'value']);
    // 将可需要判断是否存在的属性提取出来
    let $$title = true;
    let $$content = true;
    let $$current = true;
    // eslint-disable-next-line
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
            <Col key={index} span={col($$layout) ? col($$layout) : 24}>
              <Col span={12}>
                {$$current ? <h3>${data.getIn(['current', 'value'])}</h3> : ''}
                {$$title ? (
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {data.get('title').get('value')}
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
                    }}
                  >
                    {data.get('content').get('value')}
                  </div>
                ) : (
                  ''
                )}
                {$$button ? (
                  <Button style={{ width: '80%' }}>
                    {data.getIn(['btn_content', 'value'])}
                  </Button>
                ) : (
                  ''
                )}
                <br />
              </Col>
              <Col span={12}>
                {$$img ? (
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
                  ''
                )}
                <br />
              </Col>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export { OneMallUi };
