import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../img_atom';
import style from './img_ui.module.scss';

export class Img1UI extends PureComponent {
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
              {/*<section className={style.img_1_4}>*/}
              {/*<section>*/}
              {/*<span>*/}
              {/*<div*/}
              {/*style={{*/}
              {/*background: `${advance.get('content_color')}`,*/}
              {/*color: customize.getIn(['base', 'font_color']),*/}
              {/*}}*/}
              {/*>*/}
              {/*{$$show_element.includes('标题')*/}
              {/*? ''*/}
              {/*: data.getIn(['title', 'value'])}*/}
              {/*</div>*/}
              {/*</span>*/}
              {/*</section>*/}
              {/*</section>*/}
              {/*<section className={style.img_1_5}>*/}
              {/*<section>*/}
              {/*<span>*/}
              {/*{' '}*/}
              {/*<div*/}
              {/*style={{*/}
              {/*background: `${advance.get('content_color')}`,*/}
              {/*color: customize.getIn(['base', 'font_color']),*/}
              {/*}}*/}
              {/*>*/}
              {/*{$$show_element.includes('内容')*/}
              {/*? ''*/}
              {/*: data.getIn(['content', 'value'])}*/}
              {/*</div>*/}
              {/*</span>*/}
              {/*</section>*/}
              {/*</section>*/}
            </section>
          );
        })}
      </ImgAtom>
    );
  }
}
