import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_52_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section
        className={style.text_52_1}
        style={{
          border: ` 3px solid${
            advance.get('style_color') ? advance.get('style_color') : '#57d9ff'
          }`,
        }}
      >
        <section
          className={style.text_52_2}
          style={{
            borderColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }  transparent transparent  ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#57d9ff'
            }`,
          }}
        />
        <section className={style.text_52_3}>
          <p className={style.text_52_4}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
      </section>
    );
  }
}

const text_re_52 =
  ' 注定了，三千点将之台，无君之影。注定了，银甲披挂之身，无君之迹。早已注定，华发红颜，素手灼云，煮酒祝酒，只对月中空影，水中孤魂。只是注定了，只身一人！';
export { Text_Re_52_Ui, text_re_52 };
