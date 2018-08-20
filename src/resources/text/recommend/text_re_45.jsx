import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_45_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_45_1}
        style={{
          border: ` 1px solid ${
            advance.get('style_color') ? advance.get('style_color') : '#7880c8'
          }`,
        }}
      >
        <p className={style.text_45_2}>
          <div
            dangerouslySetInnerHTML={{
              __html: customize.get('html_content'),
            }}
          />
        </p>
      </section>
    );
  }
}

const text_re_45 =
  '说谎和沉默可以说是现在人类社会里日渐蔓延的两大罪恶。事实上，我们经常说谎，动不动就沉默不语。——村上春树《且听风吟》';
export { Text_Re_45_Ui, text_re_45 };
