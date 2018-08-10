import React, { PureComponent } from 'react';
import { ImgAtom } from '../img_atom';

class UpImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
      img: customize.getIn(['item', 0, 'crop_img']),
      radius: customize.getIn(['item', 0, 'radius', 'value']),
    };
    return (
      <ImgAtom {...advanced_settings}>
        {advanced_settings.img ? (
          ''
        ) : (
          <div
            className={'flex-center'}
            dangerouslySetInnerHTML={{
              __html: customize.getIn(['item', 0, 'content', 'value']),
            }}
          />
        )}
      </ImgAtom>
    );
  }
}

export { UpImgUi };
