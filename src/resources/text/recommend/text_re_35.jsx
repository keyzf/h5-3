import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_35_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_35_1}>
        <section
          className={style.text_35_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            } `,
          }}
        >
          <section className={style.text_35_3}>
            <section className={style.text_35_4} />
            <section className={style.text_35_5} />
            <section className={style.text_35_6}>
              <p className={style.text_35_7}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: customize.get('html_content'),
                  }}
                />
              </p>
            </section>
            <section className={style.text_35_8} />
            <section className={style.text_35_9} />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_35 =
  ' 染火枫林，琼壶歌月，长歌倚楼。岁岁年年，花前月下，一尊芳酒。水落红莲，唯闻玉磬，但此情依旧。';
export { Text_Re_35_Ui, text_re_35 };
