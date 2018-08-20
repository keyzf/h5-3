import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_3_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_3_1}>
        <section
          className={style.text_3_2}
          style={{
            borderBottomColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={style.text_3_3}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#7880c8'
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
    );
  }
}

const text_re_3 = '请输入标题';
export { Text_Re_3_Ui, text_re_3 };
