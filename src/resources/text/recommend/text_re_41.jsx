import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_41_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_41_1}>
        <section className={style.text_41_2}>
          <section className={style.text_41_3}>
            <span
              className={style.text_41_4}
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
        <section
          className={style.text_41_5}
          style={{
            borderTop: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            } `,
            borderBottom: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            } `,
          }}
        >
          <p className={style.text_41_6}>
            <span className={style.text_41_7}>
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </span>
          </p>
        </section>
        <section className={style.text_41_8}>
          <section className={style.text_41_9}>
            <span
              className={style.text_41_10}
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_41 =
  '我微笑着看你来的方向，并不意味着我快乐，不眠夜，馨香若兰的气息，是对影似水的柔情';
export { Text_Re_41_Ui, text_re_41 };
