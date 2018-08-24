import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_49_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_49_1}
        style={{
          border: ` 3px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#33ebe4'
          }`,
        }}
      >
        <section className={style.text_49_2}>
          <section
            className={style.text_49_3}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
          <section
            className={style.text_49_4}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
        </section>
        <section className={style.text_49_5} />
        <section className={style.text_49_6}>
          <p className={style.text_49_7}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_49_8}>
          <section
            className={style.text_49_9}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
          <section
            className={style.text_49_10}
            style={{
              border: ` 3px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_49 = '一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬';
export { Text_Re_49_Ui, text_re_49 };
