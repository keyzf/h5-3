import React, { PureComponent } from 'react';
import style from './text.module.scss';
class ThirtyOneTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_31_1}>
        <section className={style.text_31_2}>
          <section>
            <section
              className={style.text_31_3}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#379c9d'
                }`,
              }}
            />
            <section
              className={style.text_31_4}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#379c9d'
                }`,
              }}
            />
          </section>
          <section className={style.text_31_5}>
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.getIn(['customize', 'html_content']),
              }}
            />
          </section>
          <section>
            <section
              className={style.text_31_4}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#379c9d'
                }`,
              }}
            />
            <section
              className={style.text_31_3}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#379c9d'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_one_html_text = '请输入标题';
export { ThirtyOneTextUi, thirty_one_html_text };
