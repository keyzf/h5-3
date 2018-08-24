import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_13_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_13_1}
        style={{
          backgroundColor: `${
            advance.get('style_color') ? advance.get('style_color') : '#57d9ff'
          }`,
        }}
      >
        <section>
          <span>
            {' '}
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </span>
        </section>
      </section>
    );
  }
}

const text_re_13 = '颜色可自定义';
export { Text_Re_13_Ui, text_re_13 };
