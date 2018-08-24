import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_34_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_34_1}
        style={{
          borderColor: `${
            advance.get('style_color') ? advance.get('style_color') : '#fff10c'
          } `,
        }}
      >
        <p className={style.text_34_2}>
          <span
            dangerouslySetInnerHTML={{
              __html: customize.get('html_content'),
            }}
          />
        </p>
      </section>
    );
  }
}

const text_re_34 =
  '  弯弯那婉约的心弦，有一种说不出的凄楚之美，抒写的着我们飘在空中的一曲曲化蝶的旋律，琴音清绝，曲韵悠长。';
export { Text_Re_34_Ui, text_re_34 };
