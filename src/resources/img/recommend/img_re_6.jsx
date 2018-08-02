import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img6UI extends PureComponent {
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
            <section className={style.img_6_1} key={index}>
              <section className={style.img_6_2}>
                <section className={style.img_6_3}>
                  <span className={style.img_6_4}>—</span>
                </section>
                <section className={style.img_6_5}>
                  <span className={style.img_6_4}>—</span>
                </section>
              </section>
              <section className={style.img_6_6}>
                <section>
                  <img
                    src={data.get('crop_img')}
                    style={{
                      display: 'block',
                      width: '100%',
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                    }}
                  />
                </section>
                <section className={style.img_6_7}>
                  <span
                    style={{
                      fontSize: '18px',
                      background: `${advance.get('content_color')}`,
                      color: customize.getIn(['base', 'font_color']),
                    }}
                  >
                    <strong
                      style={{
                        fontSize: '18px',
                        background: `${advance.get('content_color')}`,
                        color: customize.getIn(['base', 'font_color']),
                      }}
                    >
                      {' '}
                      {$$show_element.includes('标题')
                        ? ''
                        : data.getIn(['title', 'value'])}
                    </strong>
                  </span>
                  <span
                    style={{
                      background: `${advance.get('content_color')}`,
                      color: customize.getIn(['base', 'font_color']),
                    }}
                  >
                    {$$show_element.includes('内容')
                      ? ''
                      : data.getIn(['content', 'value'])}
                  </span>
                </section>
              </section>
              <section className={style.img_6_8}>
                <section className={style.img_6_9}>
                  <span className={style.img_6_4}>—</span>
                </section>
                <section className={style.img_6_10}>
                  <span className={style.img_6_4}>—</span>
                </section>
              </section>
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
