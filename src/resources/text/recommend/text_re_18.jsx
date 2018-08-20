import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_18_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_18_1}>
        <section
          className={style.text_18_2}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#7880c8'
            }`,
          }}
        >
          <section className={style.text_18_3}>
            <p className={style.text_18_4}>
              <span
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </p>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_18 = "<span style='color:white'>输入标题</span>";
export { Text_Re_18_Ui, text_re_18 };
