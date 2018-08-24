import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_6_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_6_1}>
        <section className={style.text_6_2}>
          <section className={style.text_6_3}>
            <section
              className={style.text_6_4}
              style={{
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f58fc6'
                }`,
                backgroundColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f58fc6'
                }`,
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </section>
            <section
              className={style.text_6_5}
              style={{
                borderBottomColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f58fc6'
                }`,
                borderTopColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f58fc6'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_6 = '易企微编辑器';
export { Text_Re_6_Ui, text_re_6 };
