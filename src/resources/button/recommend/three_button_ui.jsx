import React from 'react';
import style from './button_ui.module.scss';

class ThreeButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <a href={customize.getIn(['btn_url', 'value'])}>
        <section className={style.btn_3_1}>
          <section className={style.btn_3_2}>
            <section
              className={style.btn_3_3}
              style={{
                backgroundColor: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#7880c8'
                }`,
              }}
            >
              <section>
                <section className={style.btn_3_4}>
                  <section>
                    <section
                      style={{ color: `${customize.get('font_color')}` }}
                    >
                      {customize.getIn(['content', 'value'])
                        ? customize.getIn(['content', 'value'])
                        : '易企微一站式微信营销平台'}
                    </section>
                  </section>
                </section>
              </section>
            </section>
            <section
              className={style.btn_3_5}
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
      </a>
    );
  }
}

export { ThreeButtonUi };
