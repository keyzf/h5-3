import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';

export class GridImgUi extends PureComponent {
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
          {customize.get('item').map((data, index) => {
            return (
              <div
                className={`flex_${customize.getIn([
                  'base',
                  'layout',
                  'value',
                ])}`}
                key={index}
              >
                <a href={data.getIn(['link', 'value'])}>
                  <img src={data.get('crop_img')} width={'100%'} alt={'img'} />
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
        </div>
      </ImgAtom>
    );
  }
}
