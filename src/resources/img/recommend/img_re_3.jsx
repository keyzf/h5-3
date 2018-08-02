import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img3UI extends PureComponent {
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
            <section className={style.img_3_1} key={index}>
              <section className={style.img_3_2}>
                <section className={style.img_3_3}>
                  <section className={style.img_3_4}>
                    <img
                      src={data.get('crop_img')}
                      style={{
                        width: '100%',
                        margin: 0,
                        borderRadius: `${data.getIn(['radius', 'value'])}px`,
                      }}
                      alt={'img'}
                    />
                  </section>
                </section>
              </section>
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
