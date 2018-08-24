import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_27_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_27_1}
        style={{
          border: `2px solid  ${
            advance.get('style_color') ? advance.get('style_color') : '#f58fc6'
          } `,
        }}
      >
        <section className={style.text_27_2} />
        <section className={style.text_27_3}>
          <p className={style.text_27_4}>
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_27_5} />
      </section>
    );
  }
}

const text_re_27 =
  '正如年年岁岁花相似，岁岁年年人不同。只道是不悔梦归处，只恨太匆匆。';
export { Text_Re_27_Ui, text_re_27 };
