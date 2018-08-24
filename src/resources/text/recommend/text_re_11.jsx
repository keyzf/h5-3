import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_11_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_11_1}>
        <section className={style.text_11_2}>
          <section
            className={style.text_11_3}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section className={style.text_11_4}>
            <section>
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </section>
          </section>
          <section
            className={style.text_11_5}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section className={style.text_11_6} />
        </section>
      </section>
    );
  }
}

const text_re_11 = '在这里输入标题吧';
export { Text_Re_11_Ui, text_re_11 };
