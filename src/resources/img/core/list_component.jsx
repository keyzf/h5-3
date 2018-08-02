import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';

class ListImgUi extends PureComponent {
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
                      <div className={`flex_list_2`}>
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
                        className={'flex_list_2'}
                        style={{
                          background: `${advance.get('content_color')}`,
                          color: customize.getIn(['base', 'font_color']),
                        }}
                      >
                        <div className={'response_flex flex_center'}>
                          <h4>
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                            <h6>
                              {$$show_element.includes('内容')
                                ? ''
                                : data.getIn(['content', 'value'])}
                            </h6>
                          </h4>
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
                        className={'flex_list_2'}
                        style={{
                          background: `${advance.get('content_color')}`,
                          color: customize.getIn(['base', 'font_color']),
                        }}
                      >
                        <div className={'response_flex flex_center'}>
                          <h4>
                            {$$show_element.includes('标题')
                              ? ''
                              : data.getIn(['title', 'value'])}
                            <h6>
                              {$$show_element.includes('内容')
                                ? ''
                                : data.getIn(['content', 'value'])}
                            </h6>
                          </h4>
                        </div>
                      </div>
                      <div className={`flex_list_2`}>
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
                      <div className={'response_flex'}>
                        <div
                          className={'flex_list_2'}
                          style={{
                            background: `${advance.get('content_color')}`,
                            color: customize.getIn(['base', 'font_color']),
                          }}
                        >
                          <div className={'response_flex flex_center'}>
                            <h4>
                              {$$show_element.includes('标题')
                                ? ''
                                : data.getIn(['title', 'value'])}
                              <h6>
                                {$$show_element.includes('内容')
                                  ? ''
                                  : data.getIn(['content', 'value'])}
                              </h6>
                            </h4>
                          </div>
                        </div>
                        <div className={`flex_list_2`}>
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
                    ) : (
                      <div className={'response_flex'}>
                        <div className={`flex_list_2`}>
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
                          className={'flex_list_2'}
                          style={{
                            background: `${advance.get('content_color')}`,
                            color: customize.getIn(['base', 'font_color']),
                          }}
                        >
                          <div className={'response_flex flex_center'}>
                            <h4>
                              {$$show_element.includes('标题')
                                ? ''
                                : data.getIn(['title', 'value'])}
                              <h6>
                                {$$show_element.includes('内容')
                                  ? ''
                                  : data.getIn(['content', 'value'])}
                              </h6>
                            </h4>
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

export { ListImgUi };
