import React, { PureComponent } from 'react';
import style from './text.module.scss';
class Text_Re_1_Ui extends PureComponent {
  render() {
    return (
      <section className={style.text_re_1}>
        <section className={style.text_re_2}>
          <section className={style.text_re_3}>
            <section
              className={style.text_re_4}
              style={{
                borderRightColor: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#76e57b'
                }`,
              }}
            />
            <section
              className={style.text_re_5}
              style={{
                backgroundColor: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : '#76e57b'
                }`,
              }}
            >
              <section>
                <section className={style.text_re_6}>
                  <section>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: this.props.data.getIn([
                          'customize',
                          'html_content',
                        ]),
                      }}
                    />
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_1 = '易企微一站式微信营销平台';
export { Text_Re_1_Ui, text_re_1 };
