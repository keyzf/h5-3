import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_24_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_24_1}>
        <section className={style.text_24_2}>
          <section
            className={style.text_24_3}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
          <section
            className={style.text_24_4}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
        </section>
        <section
          className={style.text_24_5}
          style={{
            border: `1px solid  ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ebe6d9'
            } `,
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ebe6d9'
            } `,
          }}
        >
          <section
            className={style.text_24_6}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </section>
        </section>
        <section className={style.text_24_2}>
          <section
            className={style.text_24_3}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
          <section
            className={style.text_24_4}
            style={{
              border: `1px solid  ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ebe6d9'
              } `,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_24 = '天堑无涯，绿杨陌上多离别，墙花路人暗想浮生。';
export { Text_Re_24_Ui, text_re_24 };
