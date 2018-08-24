import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_9_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_9_1}>
        <section
          className={style.text_9_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        />
        <section
          className={style.text_9_3}
          style={{
            border: `1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        >
          <section>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_9 = '请输入标题';
export { Text_Re_9_Ui, text_re_9 };
