import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_15_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_15_1}>
        <section
          className={style.text_15_2}
          style={{
            backgroundColor: ` ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#fff10c'
            }`,
          }}
        />
        <section className={style.text_15_3} />
        <section className={style.text_15_4}>
          <section>
            <p>
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

const text_re_15 = '易企微编辑器';
export { Text_Re_15_Ui, text_re_15 };
