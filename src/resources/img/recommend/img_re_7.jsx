import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img7UI extends PureComponent {
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
            <section key={index}>
              <section>
                <section className={style.img_7_1}>
                  <img
                    src={data.get('crop_img')}
                    style={{
                      width: '100%',
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                    }}
                  />
                </section>
                <span className={style.img_7_2} />
              </section>
              <section className={style.img_7_3}>
                <section
                  className={style.img_7_4}
                  style={{
                    background: `${advance.get('content_color')}`,
                    color: customize.getIn(['base', 'font_color']),
                  }}
                >
                  {/*{$$show_element.includes('内容')*/}
                  {/*? ''*/}
                  {/*: data.getIn(['content', 'value'])}*/}
                </section>
              </section>
              <section className={style.img_7_5} />
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
