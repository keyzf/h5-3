import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_19_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_19_1}
        style={{
          backgroundColor: ` ${
            advance.get('style_color') ? advance.get('style_color') : '#f58fc6'
          }`,
        }}
      >
        <section className={style.text_19_2}>
          <p className={style.text_19_3}>
            <span>
              {' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </span>
          </p>
        </section>
      </section>
    );
  }
}

const text_re_19 = "<span style='color:white'>输入标题</span>";
export { Text_Re_19_Ui, text_re_19 };
