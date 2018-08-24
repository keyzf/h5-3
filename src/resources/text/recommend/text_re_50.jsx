import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_50_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_50_1}
        style={{
          border: ` 1px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#1e9be8'
          }`,
        }}
      >
        <section
          className={style.text_50_2}
          style={{
            border: `0 none ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_3}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_4}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_50_5}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_6}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_7}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          >
            <p className={style.text_50_8}>
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </p>
          </section>
          <section
            className={style.text_50_9}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_10}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_50_11}
          style={{
            border: `0 none ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_50_12}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={style.text_50_13}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_50 = '乌云蔽月，人迹踪绝，说不出如斯寂寞。';
export { Text_Re_50_Ui, text_re_50 };
