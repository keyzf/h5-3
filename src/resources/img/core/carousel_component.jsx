import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import { ImgAtom } from '../img_atom';

export class CarouselImgUI extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');

    return (
      <Carousel autoplay>
        {customize.get('item').map((data, index) => {
          return (
            <a
              href={
                data.getIn(['link', 'value'])
                  ? data.getIn(['link', 'value'])
                  : 'javascript:void(0)'
              }
            >
              <ImgAtom
                className={'flex_center'}
                width={advance.get('width')}
                height={advance.get('height')}
                img={data.get('crop_img')}
                radius={data.getIn(['radius', 'value'])}
                key={index}
              />
            </a>
          );
        })}
      </Carousel>
    );
  }
}
