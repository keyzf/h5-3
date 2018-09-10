import React, { PureComponent } from 'react';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img1UI extends PureComponent {
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
    };
    return (
      <ImgAtom {...advanced_settings}>
        {customize.get('item').map((data, index) => {
          return (
            <section className={style.img_1_1} key={index}>
              <section className={style.img_1_2}>
                <section className={style.img_1_3}>
                  <img
                    onClick={this.toUrl.bind(
                      this,
                      data.getIn(['link', 'value'])
                    )}
                    style={{
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                    }}
                    src={data.get('crop_img')}
                    width={'100%'}
                    alt={'img'}
                  />
                </section>
              </section>
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
