import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img5UI extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const $$show_element = List(
      customize.getIn(['base', 'show_element', 'value'])
    );
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
    };
    return (
      <ImgAtom {...advanced_settings}>
        {customize.get('item').map((data, index) => {
          return (
            <section className={style.img_5_1} key={index}>
              <section className={style.img_5_2}>
                <section className={style.img_5_3}>
                  <p className={style.img_5_4}>
                    <img
                      alt=""
                      src={data.get('crop_img')}
                      style={{
                        borderColor: '#c6c6c7',
                        color: 'inherit',
                        borderRadius: `${data.getIn(['radius', 'value'])}px`,
                        width: '100%',
                        margin: 0,
                      }}
                    />
                  </p>
                </section>
                <section className={style.img_5_5}>
                  <section className={style.img_5_6}>
                    <span className={style.img_5_7} />
                  </section>
                </section>
              </section>
              {/*<span*/}
              {/*style={{*/}
              {/*background: `${advance.get('content_color')}`,*/}
              {/*color: customize.getIn(['base', 'font_color']),*/}
              {/*}}*/}
              {/*>*/}
              {/*{' '}*/}
              {/*{$$show_element.includes('标题')*/}
              {/*? ''*/}
              {/*: data.getIn(['title', 'value'])}*/}
              {/*</span>*/}
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
