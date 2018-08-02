import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';

export class CarouselImgUI extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const $$show_element = List(
      customize.getIn(['base', 'show_element', 'value'])
    );
    return (
      <Carousel autoplay>
        {customize.get('item').map((data, index) => {
          return (
            <a href={data.getIn(['link', 'value'])}>
              <ImgAtom
                className={'flex_center'}
                width={advance.get('width')}
                height={advance.get('height')}
                img={data.get('crop_img')}
                radius={data.getIn(['radius', 'value'])}
                key={index}
              >
                <div
                  className={'flex_center'}
                  style={{ background: `${advance.get('content_color')}` }}
                >
                  <h4
                    style={{ color: customize.getIn(['base', 'font_color']) }}
                  >
                    {$$show_element.includes('标题')
                      ? ''
                      : data.getIn(['title', 'value'])}
                    <h6
                      style={{ color: customize.getIn(['base', 'font_color']) }}
                    >
                      {$$show_element.includes('内容')
                        ? ''
                        : data.getIn(['content', 'value'])}
                    </h6>
                  </h4>
                </div>
              </ImgAtom>
            </a>
          );
        })}
      </Carousel>
    );
  }
}
