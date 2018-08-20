import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_37_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_37_1}>
        <section className={style.text_37_2}>
          <section className={style.text_37_3}>
            <section
              className={style.text_37_4}
              style={{
                borderTopColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderLeftColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
            <section
              className={style.text_37_5}
              style={{
                borderTopColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderRightColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
          </section>
          <section className={style.text_37_6}>
            <section>
              <span
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </section>
          </section>
          <section className={style.text_37_7}>
            <section
              className={style.text_37_8}
              style={{
                borderLeftColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
            <section
              className={style.text_37_9}
              style={{
                borderRightColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#33ebe4'
                } `,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_37 = '天堑无涯，绿杨陌上多离别，墙花路人暗想浮生。';
export { Text_Re_37_Ui, text_re_37 };
