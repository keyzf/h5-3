import React, { PureComponent } from 'react';
import { Row, Col, Button } from 'antd';
import { List } from 'immutable';
import { ImgAtom } from '../../img/img_atom';

class ListMallUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const $$show_element = List(
      customize.getIn(['base', 'show_element', 'value'])
    );

    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
    };
    return (
      <ImgAtom {...advanced_settings}>
        <div className={'response_flex'}>
          {customize.getIn(['base', 'layout', 'value']) === 1
            ? customize.get('item').map((data, index) => {
                return (
                  <div
                    key={index}
                    className={'flex_list_1'}
                    style={{ margin: '5px 0' }}
                  >
                    <div className={'response_flex'}>
                      <div className={`flex_list_3`}>
                        <a href={data.getIn(['link', 'value'])}>
                          <img
                            style={{
                              borderRadius: `${data.getIn([
                                'radius',
                                'value',
                              ])}px`,
                            }}
                            src={data.get('crop_img')}
                            width={'100%'}
                            height={'100%'}
                            alt={'img'}
                          />
                        </a>
                      </div>
                      <div
                        className={'flex_list_3_2'}
                        style={{
                          background: `${advance.get('content_color')}`,
                          color: customize.getIn(['base', 'font_color']),
                        }}
                      >
                        <div className={'response_flex'}>
                          <h4
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                          </h4>
                          <h6
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('内容')
                              ? ''
                              : data.getIn(['content', 'value'])}
                          </h6>
                          <h6
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                              background: `${advance.get('content_color')}`,
                            }}
                          >
                            {$$show_element.includes('现价') ? (
                              ''
                            ) : (
                              <span
                                style={{
                                  marginRight: '5px',
                                  color: 'rgb(255,6,79)',
                                }}
                              >
                                现价{data.get('current').get('value')}
                              </span>
                            )}
                            <span>
                              {' '}
                              {$$show_element.includes('原价') ? (
                                ''
                              ) : (
                                <span
                                  style={{ textDecoration: 'line-through' }}
                                >
                                  原价{data.getIn(['original', 'value'])}
                                </span>
                              )}
                            </span>
                            <span>
                              <button
                                style={{
                                  width: '85px',
                                  background: 'rgb(255,6,79)',
                                  color: 'white',
                                  border: 'none',
                                  marginLeft: '5px',
                                }}
                              >
                                {$$show_element.includes('按钮')
                                  ? ''
                                  : data.get('btn_content').get('value')}
                              </button>
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
          {customize.getIn(['base', 'layout', 'value']) === 2
            ? customize.get('item').map((data, index) => {
                return (
                  <div
                    key={index}
                    className={'flex_list_1'}
                    style={{ margin: '5px 0' }}
                  >
                    <div className={'response_flex'}>
                      <div
                        className={'flex_list_3_2'}
                        style={{
                          background: `${advance.get('content_color')}`,
                          color: customize.getIn(['base', 'font_color']),
                        }}
                      >
                        <div className={'response_flex'}>
                          <h4>
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                          </h4>
                          <h6>
                            {$$show_element.includes('内容')
                              ? ''
                              : data.getIn(['content', 'value'])}
                          </h6>
                          <h6
                            style={{
                              background: `${advance.get('content_color')}`,
                            }}
                          >
                            {$$show_element.includes('现价') ? (
                              ''
                            ) : (
                              <span
                                style={{
                                  marginRight: '5px',
                                  color: 'rgb(255,6,79)',
                                }}
                              >
                                现价{data.get('current').get('value')}
                              </span>
                            )}
                            <span>
                              {' '}
                              {$$show_element.includes('原价') ? (
                                ''
                              ) : (
                                <span
                                  style={{ textDecoration: 'line-through' }}
                                >
                                  原价{data.getIn(['original', 'value'])}
                                </span>
                              )}
                            </span>
                            <span>
                              <button
                                style={{
                                  width: '85px',
                                  background: 'rgb(255,6,79)',
                                  color: 'white',
                                  border: 'none',
                                  marginLeft: '5px',
                                }}
                              >
                                {$$show_element.includes('按钮')
                                  ? ''
                                  : data.get('btn_content').get('value')}
                              </button>
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className={`flex_list_3`}>
                        <a href={data.getIn(['link', 'value'])}>
                          <img
                            style={{
                              borderRadius: `${data.getIn([
                                'radius',
                                'value',
                              ])}px`,
                            }}
                            src={data.get('crop_img')}
                            width={'100%'}
                            height={'100%'}
                            alt={'img'}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            : ''}
          {customize.getIn(['base', 'layout', 'value']) === 3
            ? customize.get('item').map((data, index) => {
                return (
                  <div
                    key={index}
                    className={'flex_list_1'}
                    style={{ margin: '5px 0' }}
                  >
                    {index % 2 ? (
                      <div
                        key={index}
                        className={'flex_list_1'}
                        style={{ margin: '5px 0' }}
                      >
                        <div className={'response_flex'}>
                          <div className={`flex_list_3`}>
                            <a href={data.getIn(['link', 'value'])}>
                              <img
                                style={{
                                  borderRadius: `${data.getIn([
                                    'radius',
                                    'value',
                                  ])}px`,
                                }}
                                src={data.get('crop_img')}
                                width={'100%'}
                                height={'100%'}
                                alt={'img'}
                              />
                            </a>
                          </div>
                          <div
                            className={'flex_list_3_2'}
                            style={{
                              background: `${advance.get('content_color')}`,
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            <div className={'response_flex'}>
                              <h4
                                style={{
                                  color: customize.getIn([
                                    'base',
                                    'font_color',
                                  ]),
                                }}
                              >
                                {$$show_element.includes('标题')
                                  ? ''
                                  : data.getIn(['title', 'value'])}
                              </h4>
                              <h6
                                style={{
                                  color: customize.getIn([
                                    'base',
                                    'font_color',
                                  ]),
                                }}
                              >
                                {$$show_element.includes('内容')
                                  ? ''
                                  : data.getIn(['content', 'value'])}
                              </h6>
                              <h6
                                style={{
                                  color: customize.getIn([
                                    'base',
                                    'font_color',
                                  ]),
                                  background: `${advance.get('content_color')}`,
                                }}
                              >
                                {$$show_element.includes('现价') ? (
                                  ''
                                ) : (
                                  <span
                                    style={{
                                      marginRight: '5px',
                                      color: 'rgb(255,6,79)',
                                    }}
                                  >
                                    现价{data.get('current').get('value')}
                                  </span>
                                )}
                                <span>
                                  {' '}
                                  {$$show_element.includes('原价') ? (
                                    ''
                                  ) : (
                                    <span
                                      style={{ textDecoration: 'line-through' }}
                                    >
                                      原价{data.getIn(['original', 'value'])}
                                    </span>
                                  )}
                                </span>
                                <span>
                                  <button
                                    style={{
                                      width: '85px',
                                      background: 'rgb(255,6,79)',
                                      color: 'white',
                                      border: 'none',
                                      marginLeft: '5px',
                                    }}
                                  >
                                    {$$show_element.includes('按钮')
                                      ? ''
                                      : data.get('btn_content').get('value')}
                                  </button>
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className={'flex_list_1'}
                        style={{ margin: '5px 0' }}
                      >
                        <div className={'response_flex'}>
                          <div
                            className={'flex_list_3_2'}
                            style={{
                              background: `${advance.get('content_color')}`,
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            <div className={'response_flex'}>
                              <h4>
                                {$$show_element.includes('标题')
                                  ? ''
                                  : data.getIn(['title', 'value'])}
                              </h4>
                              <h6>
                                {$$show_element.includes('内容')
                                  ? ''
                                  : data.getIn(['content', 'value'])}
                              </h6>
                              <h6
                                style={{
                                  background: `${advance.get('content_color')}`,
                                }}
                              >
                                {$$show_element.includes('现价') ? (
                                  ''
                                ) : (
                                  <span
                                    style={{
                                      marginRight: '5px',
                                      color: 'rgb(255,6,79)',
                                    }}
                                  >
                                    现价{data.get('current').get('value')}
                                  </span>
                                )}
                                <span>
                                  {' '}
                                  {$$show_element.includes('原价') ? (
                                    ''
                                  ) : (
                                    <span
                                      style={{ textDecoration: 'line-through' }}
                                    >
                                      原价{data.getIn(['original', 'value'])}
                                    </span>
                                  )}
                                </span>
                                <span>
                                  <button
                                    style={{
                                      width: '85px',
                                      background: 'rgb(255,6,79)',
                                      color: 'white',
                                      border: 'none',
                                      marginLeft: '5px',
                                    }}
                                  >
                                    {$$show_element.includes('按钮')
                                      ? ''
                                      : data.get('btn_content').get('value')}
                                  </button>
                                </span>
                              </h6>
                            </div>
                          </div>
                          <div className={`flex_list_3`}>
                            <a href={data.getIn(['link', 'value'])}>
                              <img
                                style={{
                                  borderRadius: `${data.getIn([
                                    'radius',
                                    'value',
                                  ])}px`,
                                }}
                                src={data.get('crop_img')}
                                width={'100%'}
                                height={'100%'}
                                alt={'img'}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            : ''}
        </div>
      </ImgAtom>
    );
  }
}

export { ListMallUi };
