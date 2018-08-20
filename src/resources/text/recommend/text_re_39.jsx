import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_39_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_39_1}>
        <section className={style.text_39_2}>
          <section className={style.text_39_3}>
            <section
              className={style.text_39_4}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#57d9ff'
                } `,
              }}
            />
            <section
              className={style.text_39_5}
              style={{
                borderColor: ` ${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#57d9ff'
                } `,
              }}
            />
          </section>
          <section
            className={style.text_39_6}
            style={{
              border: ` 2px solid ${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#57d9ff'
              } `,
            }}
          >
            <p className={style.text_39_7}>
              <span>
                <span className={style.text_39_8}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: customize.get('html_content'),
                    }}
                  />
                </span>
              </span>
            </p>
          </section>
        </section>
      </section>
    );
  }
}

const text_re_39 =
  '              秋夜冷峻云烟，渐次消褪，淡淡的月色，透过密集摇叶的缝隙，洒下斑驳的光点。摇曳着月影的婆娑，忽明忽暗，遥指苍穹，蓝色的天幕上散落着点点寒星。月色在灵动的云层间游弋，忽隐忽现、瞬息万变，呈现出无限的遐想..';
export { Text_Re_39_Ui, text_re_39 };
