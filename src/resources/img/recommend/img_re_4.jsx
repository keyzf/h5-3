import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img4UI extends PureComponent {
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
            <section className={style.img_4_1} key={index}>
              <section className={style.img_4_2}>
                <section className={style.img_4_3}>
                  <section className={style.img_4_4} />
                  <section className={style.img_4_5} />
                </section>
                <section className={style.img_4_6}>
                  <section className={style.img_4_7} />
                  <section className={style.img_4_8} />

                  <img
                    alt="img"
                    src={data.get('crop_img')}
                    style={{
                      borderColor: '#fcb42b',
                      color: 'inherit',
                      width: '100%',
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                      margin: 0,
                    }}
                  />
                </section>
                <section className={style.img_4_9}>
                  <section className={style.img_4_10} />
                  <section className={style.img_4_11} />
                  <section className={style.img_4_12} />
                  <section className={style.img_4_13} />
                </section>
              </section>
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
