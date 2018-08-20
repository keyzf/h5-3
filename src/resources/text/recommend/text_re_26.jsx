import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_26_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_26_1}
        style={{
          border: `2px solid  ${
            advance.get('style_color') ? advance.get('style_color') : '#76e57b'
          } `,
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: customize.get('html_content'),
          }}
        />
      </section>
    );
  }
}

const text_re_26 = ' 月光的森然，乐律的精魂，一切只是幻影，稍纵即逝';
export { Text_Re_26_Ui, text_re_26 };
