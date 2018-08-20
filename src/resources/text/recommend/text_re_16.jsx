import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_16_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_16_1}>
        <section className={style.text_16_2}>
          <section
            className={style.text_16_3}
            style={{
              borderColor: ` ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f96e57'
              }`,
            }}
          >
            <section className={style.text_16_4}>
              <section
                className={style.text_16_5}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section
                className={style.text_16_6}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section className={style.text_16_7}>
                <section>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: customize.get('html_content'),
                    }}
                  />
                </section>
              </section>
            </section>
            <section className={style.text_16_8}>
              <section
                className={style.text_16_9}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
              <section
                className={style.text_16_10}
                style={{
                  backgroundColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f96e57'
                  }`,
                }}
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_16 = '火柴杆';
export { Text_Re_16_Ui, text_re_16 };
