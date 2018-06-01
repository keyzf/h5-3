import React from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import ComponentLocation from '../../../app/model/visual/component-location';
import { MallLayoutAtom } from './layout_atom';
import { choose_action, select_action } from '../../../redux/action';

class ListMallComponent extends React.Component {
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  render() {
    // 将接收到的信息分解提取
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    const $$show_element = customize
      .get('base')
      .get('show_element')
      .get('value');
    const $$layout = customize
      .get('base')
      .get('layout')
      .get('value');
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
    // 高级设置（无需更改，套用模板）
    const advanced_settings = {
      // 绝对定位
      top: advance
        .get('position')
        .get('top')
        .get('value'),
      left: advance
        .get('position')
        .get('left')
        .get('value'),
      right: advance
        .get('position')
        .get('right')
        .get('value'),
      bottom: advance
        .get('position')
        .get('bottom')
        .get('value'),
      depth: advance
        .get('position')
        .get('depth')
        .get('value'),
      // 内边距
      pb: advance
        .get('padding')
        .get('bottom')
        .get('value'),
      pl: advance
        .get('padding')
        .get('left')
        .get('value'),
      pr: advance
        .get('padding')
        .get('right')
        .get('value'),
      pt: advance
        .get('padding')
        .get('top')
        .get('value'),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
    };

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
      <MallLayoutAtom {...advanced_settings}>
        {this.props.choose ? (
          <div style={{ border: '1px grey solid' }}>
            <ComponentLocation visible={this.props.choose}>
              <Row
                gutter={16}
                onClick={this.choose.bind(
                  this,
                  this.props.index,
                  this.props.data
                )}
              >
                {customize.get('item').map((data, index) => {
                  return (
                    <Col key={index} span={col($$layout) ? col($$layout) : 24}>
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
                      <Col span={12}>
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
                        {$$current ? data.get('current').get('value') : ''}
                        {$$original ? data.get('original').get('value') : ''}
                        {$$button ? (
                          <Button>
                            {data.get('btn_content').get('value')}
                          </Button>
                        ) : (
                          ''
                        )}
                        <br />
                      </Col>
                    </Col>
                  );
                })}
              </Row>
            </ComponentLocation>
          </div>
        ) : (
          <ComponentLocation visible={this.props.choose}>
            <Row
              gutter={16}
              onClick={this.choose.bind(
                this,
                this.props.index,
                this.props.data
              )}
            >
              {customize.get('item').map((data, index) => {
                return (
                  <Col key={index} span={col($$layout) ? col($$layout) : 24}>
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
                    <Col span={12}>
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
                      {$$current ? data.get('current').get('value') : ''}
                      {$$original ? data.get('original').get('value') : ''}
                      {$$button ? (
                        <Button>{data.get('btn_content').get('value')}</Button>
                      ) : (
                        ''
                      )}
                      <br />
                    </Col>
                  </Col>
                );
              })}
            </Row>
          </ComponentLocation>
        )}
      </MallLayoutAtom>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
  };
};

// hoc 包装组件
export default connect('', mapDispatchToProps)(ListMallComponent);
