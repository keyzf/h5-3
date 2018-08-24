import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_12_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_12_1}>
        <section
          className={style.text_12_2}
          style={{
            border: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#ff8c00'
            }`,
          }}
        >
          <p className={style.text_12_3}>
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

const text_re_12 = '在此输入标题';
export { Text_Re_12_Ui, text_re_12 };
