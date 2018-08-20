import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_22_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_22_1}>
        <section className={style.text_22_2}>
          <section className={style.text_22_3}>
            <p
              style={{
                color: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              <span className={style.text_22_4}>﹁</span>
            </p>
            <p>
              <span className={style.text_22_5}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: customize.get('html_content'),
                  }}
                />
              </span>
            </p>
            <p
              style={{
                color: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              <span className={style.text_22_4}>﹂</span>
            </p>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_22 = '一站式微信营销平台';
export { Text_Re_22_Ui, text_re_22 };
