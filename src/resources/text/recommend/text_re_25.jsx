import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_25_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_25_1}
        style={{
          border: `3px solid  ${
            advance.get('style_color') ? advance.get('style_color') : '#7880c8'
          } `,
        }}
      >
        <section
          className={style.text_25_2}
          style={{
            border: `1px solid  ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#7880c8'
            } `,
          }}
        >
          <p className={style.text_25_3}>
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
      </section>
    );
  }
}

const text_re_25 =
  ' <div >易企微编辑器</div>\n' + '            <div>简洁便利才是真</div>';
export { Text_Re_25_Ui, text_re_25 };
