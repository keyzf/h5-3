import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_8_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_8_1}>
        <section className={style.text_8_2}>
          <section
            className={style.text_8_3}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ff8c00'
              }`,
            }}
          >
            <section
              className={style.text_8_4}
              style={{
                backgroundColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_8 = '微信编辑器';
export { Text_Re_8_Ui, text_re_8 };
