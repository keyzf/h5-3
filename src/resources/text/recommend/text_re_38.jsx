import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_38_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_38_1}
        style={{
          border: `3px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#76e57b'
          } `,
        }}
      >
        <section className={style.text_38_2}>
          <section
            className={style.text_38_3}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
            }}
          />
          <section
            className={style.text_38_4}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
            }}
          />
        </section>
        <section className={style.text_38_5}>
          <p className={style.text_38_6}>
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_38_7}>
          <section
            className={style.text_38_8}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
            }}
          />
          <section
            className={style.text_38_9}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              } `,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_38 = '夜未央，流星落，情已殇。爱在夜色里永远是传奇';
export { Text_Re_38_Ui, text_re_38 };
