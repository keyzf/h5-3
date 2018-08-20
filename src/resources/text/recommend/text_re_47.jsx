import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_47_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <div>
        <section
          className={style.text_47_1}
          style={{
            borderBottom: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        />
        <section
          className={style.text_47_2}
          style={{
            borderLeft: ` 1px solid ${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        />
        <section className={style.text_47_3}>
          <p className={style.text_47_4}>
            <div
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </p>
        </section>
        <section className={style.text_47_5}>
          <section
            className={style.text_47_6}
            style={{
              borderRight: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f58fc6'
              }`,
            }}
          />
          <section
            className={style.text_47_7}
            style={{
              borderBottom: ` 1px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#f58fc6'
              }`,
            }}
          />
        </section>
      </div>
    );
  }
}

const text_re_47 =
  '开满朝颜的晚秋，我可以卸掉一身倦怠，独自踏上旅途。趁晚秋未晚，我伴疏雨，轻车铁轨，我临窗静候，看车窗物景移变，幻出迷离异芒，织成一道道流光，弹落我心蒙蒙咸埃……唯有静候。晚秋。疏雨。入梦而来。';
export { Text_Re_47_Ui, text_re_47 };
