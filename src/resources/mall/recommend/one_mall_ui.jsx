import React from 'react';
import { Row, Col, Button } from 'antd';
import { List } from 'immutable';
import { ImgAtom } from '../../img/img_atom';

class OneMallUi extends React.Component {
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
                        <div className={'response_flex flex_center'}>
                          <h3
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                              background: `${advance.get('content_color')}`,
                            }}
                          >
                            ${$$show_element.includes('现价')
                              ? ''
                              : data.get('current').get('value')}
                          </h3>

                          <h4
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                          </h4>
                          <h6
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('内容')
                              ? ''
                              : data.getIn(['content', 'value'])}
                          </h6>
                          <button
                            className={'flex_center'}
                            style={{
                              width: '85px',
                              color: '#000',
                              border: '1px #000 solid',
                              marginLeft: '5px',
                            }}
                          >
                            {$$show_element.includes('按钮')
                              ? ''
                              : data.get('btn_content').get('value')}
                          </button>
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
                        <div className={'response_flex flex_center'}>
                          <h3
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                              background: `${advance.get('content_color')}`,
                            }}
                          >
                            ${$$show_element.includes('现价')
                              ? ''
                              : data.get('current').get('value')}
                          </h3>

                          <h4
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                          </h4>
                          <h6
                            className={'flex_center'}
                            style={{
                              color: customize.getIn(['base', 'font_color']),
                            }}
                          >
                            {$$show_element.includes('内容')
                              ? ''
                              : data.getIn(['content', 'value'])}
                          </h6>
                          <button
                            className={'flex_center'}
                            style={{
                              width: '85px',
                              color: '#000',
                              border: '1px #000 solid',
                              marginLeft: '5px',
                            }}
                          >
                            {$$show_element.includes('按钮')
                              ? ''
                              : data.get('btn_content').get('value')}
                          </button>
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
                            <div className={'response_flex flex_center'}>
                              <h3
                                className={'flex_center'}
                                style={{
                                  color: customize.getIn([
                                    'base',
                                    'font_color',
                                  ]),
                                  background: `${advance.get('content_color')}`,
                                }}
                              >
                                ${$$show_element.includes('现价')
                                  ? ''
                                  : data.get('current').get('value')}
                              </h3>

                              <h4
                                className={'flex_center'}
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
                                className={'flex_center'}
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
                              <button
                                className={'flex_center'}
                                style={{
                                  width: '85px',
                                  color: '#000',
                                  border: '1px #000 solid',
                                  marginLeft: '5px',
                                }}
                              >
                                {$$show_element.includes('按钮')
                                  ? ''
                                  : data.get('btn_content').get('value')}
                              </button>
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
                            <div className={'response_flex flex_center'}>
                              <h3
                                className={'flex_center'}
                                style={{
                                  color: customize.getIn([
                                    'base',
                                    'font_color',
                                  ]),
                                  background: `${advance.get('content_color')}`,
                                }}
                              >
                                ${$$show_element.includes('现价')
                                  ? ''
                                  : data.get('current').get('value')}
                              </h3>

                              <h4
                                className={'flex_center'}
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
                                className={'flex_center'}
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
                              <button
                                className={'flex_center'}
                                style={{
                                  width: '85px',
                                  color: '#000',
                                  border: '1px #000 solid',
                                  marginLeft: '5px',
                                }}
                              >
                                {$$show_element.includes('按钮')
                                  ? ''
                                  : data.get('btn_content').get('value')}
                              </button>
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

export { OneMallUi };
