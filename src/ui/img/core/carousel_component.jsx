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

    return (
      <Carousel autoplay>
        {customize.get('item').map((data, index) => {
          return (
            <ImgAtom
              onClick={this.toUrl.bind(this, data.getIn(['link', 'value']))}
              className={'flex_center'}
              width={advance.get('width')}
              height={advance.get('height')}
              img={data.get('crop_img')}
              radius={data.getIn(['radius', 'value'])}
              key={index}
            />
          );
        })}
      </Carousel>
    );
  }
}
