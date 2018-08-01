import React, { PureComponent } from 'react';
import style from './text.module.scss';
class ThirtyTwoTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_32_1}>
        <section className={style.text_32_2}>
          <section>
            <span
              className={style.text_32_3}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
          <section className={style.text_32_4}>
            <section
              className={style.text_32_5}
              style={{
                border: `1px solid ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
            <section className={style.text_32_8}>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.data.getIn(['customize', 'html_content']),
                }}
              />
            </section>
            <section
              className={style.text_32_6}
              style={{
                border: `1px solid ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
          <section>
            <span
              className={style.text_32_7}
              style={{
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#2aaade'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_two_html_text = '请输入标题';
export { ThirtyTwoTextUi, thirty_two_html_text };
