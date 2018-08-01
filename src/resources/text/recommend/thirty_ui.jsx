import React, { PureComponent } from 'react';
import style from './text.module.scss';
class ThirtyTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_30_1}>
        <section className={style.text_30_2}>
          <section className={style.text_30_3}>
            <section className={style.text_30_4} />
          </section>
          <section
            className={style.text_30_5}
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
          <section className={style.text_30_6}>
            <section className={style.text_30_7} />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_html_text = '你看到的是一个标题';
export { ThirtyTextUi, thirty_html_text };
