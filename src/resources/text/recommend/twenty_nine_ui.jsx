import React, { PureComponent } from 'react';
import style from './text.module.scss';
class TwentyNineTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_29_1}>
        <section className={style.text_29_2}>
          <section className={style.text_29_3} />
          <section
            className={style.text_29_4}
            style={{
              background: `${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#39cfca'
              }`,
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.getIn(['customize', 'html_content']),
              }}
            />
          </section>
          <section className={style.text_29_5} />
        </section>
      </section>
    );
  }
}

const twenty_nine_html_text = '你看到的是一个标题';
export { TwentyNineTextUi, twenty_nine_html_text };
