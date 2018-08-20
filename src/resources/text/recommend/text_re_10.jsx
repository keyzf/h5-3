import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_10_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_10_1}>
        <section className={style.text_10_2}>
          <section
            className={style.text_10_3}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section
            className={style.text_10_4}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section
            className={style.text_10_5}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
              borderRightColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#fff10c'
              }`,
            }}
          />
          <section className={style.text_10_6}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_10 = ' <span style="font-size:18px">请输入标题</span>';
export { Text_Re_10_Ui, text_re_10 };
