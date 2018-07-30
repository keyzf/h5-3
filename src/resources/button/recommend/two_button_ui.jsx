import React from 'react';
import style from './button_ui.module.scss';

class TwoButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <a href={customize.getIn(['btn_url', 'value'])}>
        <section className={style.btn_2_1}>
          <section className={style.btn_2_2}>
            <section className={style.btn_2_3}>
              <section
                className={style.btn_2_4}
                style={{
                  borderRightColor: `${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#76e57b'
                  }`,
                }}
              />
              <section
                className={style.btn_2_5}
                style={{
                  backgroundColor: `${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#76e57b'
                  }`,
                }}
              >
                <section>
                  <section className={style.btn_2_6}>
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
            </section>
          </section>
        </section>
      </a>
    );
  }
}

export { TwoButtonUi };
