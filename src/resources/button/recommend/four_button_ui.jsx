import React from 'react';
import style from './button_ui.module.scss';

class FourButtonUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <a href={customize.getIn(['btn_url', 'value'])}>
        <section className={style.btn_4_1}>
          <section
            className={style.btn_4_2}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#33ebe4'
              }`,
            }}
          >
            <section className={style.btn_4_3}>
              <section
                className={style.btn_4_4}
                style={{
                  border: ` 0.1em solid  ${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : ' #33ebe4'
                  }`,
                  backgroundColor: `${
                    advance.get('style_color')
                      ? advance.get('style_color')
                      : '#33ebe4'
                  }`,
                }}
              >
                <section style={{ color: `${customize.get('font_color')}` }}>
                  {customize.getIn(['content', 'value'])
                    ? customize.getIn(['content', 'value'])
                    : '戳我'}
                </section>
              </section>
            </section>
          </section>
          <section className={style.btn_4_5} />
        </section>
      </a>
    );
  }
}

export { FourButtonUi };
