import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_23_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_23_1}>
        <section
          className={style.text_23_2}
          style={{
            boxShadow: ` ${
              advance.get('style_color') ? advance.get('style_color') : '#aaa'
            } 0 0 3px`,
          }}
        >
          <p>
            <span
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <br />
      </section>
    );
  }
}

const text_re_23 =
  '笑对人生，能穿透迷雾；笑对人生，能坚持到底；笑对人生，能化解危机；笑对人生，能照亮黑暗。';
export { Text_Re_23_Ui, text_re_23 };
