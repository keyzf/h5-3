import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_51_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_51_1}>
        <section
          className={style.text_51_2}
          style={{
            border: ` 2px solid${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
            }`,
          }}
        >
          <p>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section
          className={style.text_51_3}
          style={{
            borderTopColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
            }`,
            borderBottomColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#33ebe4'
            }`,
          }}
        />
        <section className={style.text_51_4} />
      </section>
    );
  }
}

const text_re_51 =
  '正如年年岁岁花相似，岁岁年年人不同。只道是不悔梦归处，只恨太匆匆。';
export { Text_Re_51_Ui, text_re_51 };
