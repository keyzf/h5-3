import React, { PureComponent } from 'react';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img1UI extends PureComponent {
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
                  <a
                    href={
                      data.getIn(['link', 'value'])
                        ? data.getIn(['link', 'value'])
                        : 'javascript:void(0)'
                    }
                  >
                    <img
                      style={{
                        borderRadius: `${data.getIn(['radius', 'value'])}px`,
                      }}
                      src={data.get('crop_img')}
                      width={'100%'}
                      alt={'img'}
                    />
                  </a>
                </section>
              </section>
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
