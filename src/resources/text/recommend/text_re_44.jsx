import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_44_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_44_1}
        style={{
          border: ` 2px dashed  ${
            advance.get('style_color') ? advance.get('style_color') : '#33ebe4'
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
    );
  }
}

const text_re_44 =
  '站在高高的神坛上，俯瞰人生，没看到世间其乐融融，只看到哀思遍地，忧伤漫天，美丽如雪般凋零，淡漠如烟般飘散。';
export { Text_Re_44_Ui, text_re_44 };
