import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_4_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    return (
      <section>
        <section className={style.text_4_1}>
          <span className={style.text_4_2} />
          <span className={style.text_4_4}>
            <span className={style.text_4_4} />
            <span className={style.text_4_5} />
          </span>
        </section>
        <section className={style.text_4_6}>
          <span>
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

const text_re_4 = '<h3>请输入标题</h3>';
export { Text_Re_4_Ui, text_re_4 };
