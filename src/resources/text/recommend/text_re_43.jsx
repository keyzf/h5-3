import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_43_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_43_1}>
        <section className={style.text_43_2}>
          <section
            className={style.text_43_3}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
          <section
            className={style.text_43_4}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
        </section>
        <section className={style.text_43_5}>
          <p className={style.text_43_6}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_43_7}>
          <section
            className={style.text_43_8}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#76e57b'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_43 = ' 转身，一缕冷香远，逝雪深，笑意浅。来世你渡我，可愿？';
export { Text_Re_43_Ui, text_re_43 };
