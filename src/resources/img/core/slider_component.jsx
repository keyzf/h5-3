import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';

export class SliderImgUI extends PureComponent {
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
      <div
        style={{
          width: '100%',
          overflow: 'auto',
          display: 'flex',
          flex: '0 0 200px',
        }}
      >
        <ImgAtom {...advanced_settings}>
          {customize.get('item').map((data, index) => {
            return (
              <div
                key={index}
                style={{ flex: '0 0 120px', marginRight: '2px' }}
              >
                <a
                  href={data.getIn(['link', 'value'])}
                  style={{ color: customize.getIn(['base', 'font_color']) }}
                >
                  <img
                    style={{
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                    }}
                    width={'100%'}
                    src={data.get('crop_img')}
                    alt={'img'}
                  />
                </a>
                <div
                  className={'flex_center'}
                  style={{
                    background: `${advance.get('content_color')}`,
                    color: customize.getIn(['base', 'font_color']),
                  }}
                >
                  <h4>
                    {' '}
                    {$$show_element.includes('标题')
                      ? ''
                      : data.getIn(['title', 'value'])}
                  </h4>
                </div>
                <div
                  className={'flex_center'}
                  style={{
                    background: `${advance.get('content_color')}`,
                    color: customize.getIn(['base', 'font_color']),
                  }}
                >
                  {$$show_element.includes('内容') ? (
                    ''
                  ) : (
                    <h6>{data.getIn(['content', 'value'])}</h6>
                  )}
                </div>
              </div>
            );
          })}
        </ImgAtom>
      </div>
    );
  }
}
