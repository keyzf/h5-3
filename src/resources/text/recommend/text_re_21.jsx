import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_21_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section className={style.text_21_1}>
          <section>
            <section
              className={style.text_21_2}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f05454'
                }`,
              }}
            >
              <section
                className={style.text_21_3}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              />
              <section
                className={style.text_21_4}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              >
                <section
                  className={style.text_21_5}
                  style={{
                    borderColor: ` ${
                      advance.get('style_color')
                        ? advance.get('style_color')
                        : '#f05454'
                    }`,
                  }}
                />
                <section
                  className={style.text_21_6}
                  style={{
                    borderColor: ` ${
                      advance.get('style_color')
                        ? advance.get('style_color')
                        : '#f05454'
                    }`,
                  }}
                />
              </section>
              <section
                className={style.text_21_7}
                style={{
                  borderColor: ` ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#f05454'
                  }`,
                }}
              />
            </section>
            <section
              className={style.text_21_8}
              style={{
                border: ` 2px solid  ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#f05454'
                }`,
              }}
            >
              <section>
                <span
                  dangerouslySetInnerHTML={{
                    __html: customize.get('html_content'),
                  }}
                />
              </section>
            </section>
          </section>
        </section>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

const text_re_21 = '输入标题';
export { Text_Re_21_Ui, text_re_21 };
