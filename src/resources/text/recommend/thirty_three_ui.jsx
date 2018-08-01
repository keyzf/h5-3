import React, { PureComponent } from 'react';
import style from './text.module.scss';
class ThirtyThreeTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_33_1}>
        <section className={style.text_33_2}>
          <section
            className={style.text_33_3}
            style={{
              border: `1px solid ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
              }`,
            }}
          />
          <section
            className={style.text_33_4}
            style={{
              border: `1px solid ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
              }`,
            }}
          />
          <section
            className={style.text_33_5}
            style={{
              color: ` ${
                this.props.data.getIn(['advance', 'style_color'])
                  ? this.props.data.getIn(['advance', 'style_color'])
                  : '#19254d'
              }`,
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.getIn(['customize', 'html_content']),
              }}
            />

            <span
              className={style.text_33_6}
              style={{
                borderLeft: ` 15px  ${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#19254d'
                }`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const thirty_three_html_text = '请输入标题';
export { ThirtyThreeTextUi, thirty_three_html_text };
