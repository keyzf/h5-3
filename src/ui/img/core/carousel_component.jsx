import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import { CarouselAtom } from '../img_atom';

export class CarouselImgUI extends PureComponent {
  toUrl = url => {
    // eslint-disable-next-line
    url ? (window.location.href = url) : '';
  };

  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
      // img:'http://src.e7wei.com/0.3450422325195559.png',
    };

    return (
      <Carousel autoplay>
        {customize.get('item').map((data, index) => {
          const carousel = {
            radius: data.getIn(['radius', 'value']),
            img: data.get('crop_img'),
          };
          return (
            <CarouselAtom
              {...carousel}
              {...advanced_settings}
              onClick={this.toUrl.bind(this, data.getIn(['link', 'value']))}
              key={index}
            />
          );
        })}
      </Carousel>
    );
  }
}
