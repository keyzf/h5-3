import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_36_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_36_1}>
        <section
          className={style.text_36_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
          }}
        />
        <section
          className={style.text_36_3}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
          }}
        >
          <section>
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </section>
        </section>
        <section
          className={style.text_36_4}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            } `,
          }}
        />
      </section>
    );
  }
}

const text_re_36 = ' 一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬。';
export { Text_Re_36_Ui, text_re_36 };
