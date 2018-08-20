import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_20_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section>
        <section
          className={style.text_20_1}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#76e57b'
            }`,
          }}
        >
          <section className={style.text_20_2}>
            <section
              className={style.text_20_3}
              style={{
                borderLeftColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                }`,
                borderRightColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#76e57b'
                }`,
              }}
            />
          </section>
        </section>
        <section className={style.text_20_4}>
          <span
            dangerouslySetInnerHTML={{
              __html: customize.get('html_content'),
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_20 = '输入标题';
export { Text_Re_20_Ui, text_re_20 };
