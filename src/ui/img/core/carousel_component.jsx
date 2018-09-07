import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import { ImgAtom } from '../img_atom';

export class CarouselImgUI extends PureComponent {
  toUrl = url => {
    window.location.href = url;
  };

  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
      // img:'http://src.e7wei.com/0.3450422325195559.png',
      radius: customize.getIn(['item', 0, 'radius', 'value']),
    };

    return (
      <Carousel autoplay>
        {customize.get('item').map((data, index) => {
          return (
            <ImgAtom
              {...advanced_settings}
              onClick={this.toUrl.bind(this, data.getIn(['link', 'value']))}
              className={'flex_center'}
              key={index}
            >
              <img
                src={data.get('crop_img')}
                alt={'图片'}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </ImgAtom>
          );
        })}
      </Carousel>
    );
  }
}
