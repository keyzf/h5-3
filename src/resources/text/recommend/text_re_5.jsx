import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_5_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_5_1}>
        <section
          className={style.text_5_2}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ff8c00'
            }`,
          }}
        >
          <p className={style.text_5_3}>
            <span>
              {' '}
              <div
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

const text_re_5 = '<span style="color:#ff8c00;font-size:36px">E7WEI.COM</span>';
export { Text_Re_5_Ui, text_re_5 };
