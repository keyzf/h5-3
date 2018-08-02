import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img2UI extends PureComponent {
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
            <section className={style.img_2_1} key={index}>
              <section className={style.img_2_2}>
                <section className={style.img_2_3}>
                  <p>
                    <a href={data.getIn(['link', 'value'])}>
                      <img
                        style={{
                          width: '100%',
                          borderTopLeftRadius: '2%',
                          borderTopRightRadius: '2%',
                          verticalAlign: 'middle',
                          borderRadius: `${data.getIn(['radius', 'value'])}px`,
                        }}
                        src={data.get('crop_img')}
                      />
                    </a>
                  </p>
                  <section className={style.img_2_4}>
                    <p>
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
                    </p>
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
