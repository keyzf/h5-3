import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_2_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_2_1}>
        <section className={style.text_2_2}>
          <section
            className={style.text_2_3}
            style={{
              backgroundColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#7880c8'
              }`,
            }}
          >
            <section>
              <section className={style.text_2_4}>
                <section>
                  <section style={{ color: `${customize.get('font_color')}` }}>
                    {customize.getIn(['content', 'value'])
                      ? customize.getIn(['content', 'value'])
                      : '易企微一站式微信营销平台'}
                  </section>
                </section>
              </section>
            </section>
          </section>
          <section
            className={style.text_2_5}
            style={{
              borderLeftColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#7880c8'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_2 = '易企微一站式微信营销平台';
export { Text_Re_2_Ui, text_re_2 };
