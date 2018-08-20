import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_40_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_40_1}
        style={{
          border: `1px solid ${
            advance.get('style_color') ? advance.get('style_color') : ' #f87a7a'
          } `,
        }}
      >
        <section className={style.text_40_2}>
          <section
            className={style.text_40_3}
            style={{
              borderLeft: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
              borderBottom: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
          <section
            className={style.text_40_4}
            style={{
              borderRight: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
              borderBottom: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
        </section>
        <section
          className={style.text_40_5}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : ' #f87a7a'
            } `,
          }}
        >
          <section
            className={style.text_40_6}
            style={{
              border: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
          <section
            className={style.text_40_7}
            style={{
              border: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
        </section>
        <section
          className={style.text_40_8}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : ' #f87a7a'
            } `,
          }}
        >
          <section className={style.text_40_9}>
            <p className={style.text_40_10}>
              <span
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </p>
          </section>
        </section>
        <section
          className={style.text_40_11}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : ' #f87a7a'
            } `,
          }}
        >
          <section
            className={style.text_40_12}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
          <section
            className={style.text_40_13}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
        </section>
        <section
          className={style.text_40_14}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : ' #f87a7a'
            } `,
          }}
        >
          <section
            className={style.text_40_15}
            style={{
              borderTop: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
              borderLeft: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
          <section
            className={style.text_40_16}
            style={{
              borderTop: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
              borderRight: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
            }}
          />
          <section
            className={style.text_40_17}
            style={{
              borderTop: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : ' #f87a7a'
              } `,
              borderRight: `1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f87a7a'
              } `,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_40 =
  ' 真切的生活，真心的笑容，真挚的情感，真情的流露。面对真实，我无须掩饰。';
export { Text_Re_40_Ui, text_re_40 };
