import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_46_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_46_1}>
        <section className={style.text_46_2}>
          <section
            className={style.text_46_3}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section
            className={style.text_46_4}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section className={style.text_46_5} />
        </section>
        <section
          className={style.text_46_6}
          style={{
            border: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        >
          <section className={style.text_46_7}>
            <p>
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </p>
          </section>
        </section>
        <section className={style.text_46_8}>
          <section
            className={style.text_46_9}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
          <section
            className={style.text_46_10}
            style={{
              borderColor: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

const text_re_46 =
  '  人世间有太多的情感与归宿我们不能把握，构成了命运的不确定与爱情的不可求。在这个浮华掠影幻梦破灭的年代，对于爱情、事业、青春与梦想，我们通常只能默然相守，寂静求欢。';
export { Text_Re_46_Ui, text_re_46 };
