import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_14_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section>
        <section className={style.text_14_1}>
          <span className={style.text_14_2}>
            <span className={style.text_14_3}>
              {' '}
              <span
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </span>
          </span>
        </section>
        <section
          className={style.text_14_4}
          style={{
            border: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ff8c00'
            }`,
          }}
        />
      </section>
    );
  }
}

const text_re_14 = '易企微编辑器';
export { Text_Re_14_Ui, text_re_14 };
