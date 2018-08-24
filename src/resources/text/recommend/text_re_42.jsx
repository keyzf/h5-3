import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_42_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section className={style.text_42_1}>
          <section
            className={style.text_42_2}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section
            className={style.text_42_3}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
        </section>
        <section
          className={style.text_42_4}
          style={{
            border: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            }`,
          }}
        >
          <p className={style.text_42_5}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_42_6}>
          <section
            className={style.text_42_7}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
          <section
            className={style.text_42_8}
            style={{
              border: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f05454'
              }`,
            }}
          />
        </section>
      </div>
    );
  }
}

const text_re_42 =
  '  我曾听人说过，当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。——《东邪西毒》';
export { Text_Re_42_Ui, text_re_42 };
