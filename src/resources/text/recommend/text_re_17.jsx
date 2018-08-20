import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_17_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_17_1}>
        <section
          className={style.text_17_2}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f05454'
            }`,
          }}
        />
        <span className={style.text_17_3}>
          {' '}
          <span
            dangerouslySetInnerHTML={{
              __html: customize.get('html_content'),
            }}
          />
        </span>
      </section>
    );
  }
}

const text_re_17 = "<span style='color:red'>输入标题</span>";
export { Text_Re_17_Ui, text_re_17 };
