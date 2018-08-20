import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_7_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_7_1}>
        <p className={style.text_7_2}>
          <span
            style={{
              color: `${
                advance.get('style_color')
                  ? advance.get('style_color')
                  : '#ff8c00'
              }`,
            }}
          >
            <strong>◆</strong>
          </span>
          <strong>
            <span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            />&nbsp;<span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              ◆
            </span>&nbsp;<span
              style={{
                color: `${
                  advance.get('style_color')
                    ? advance.get('style_color')
                    : '#ff8c00'
                }`,
              }}
            >
              ◆
            </span>
          </strong>
        </p>
        <p className={style.text_7_4}>
          <span className="active brush">
            <strong>
              <div
                dangerouslySetInnerHTML={{
                  __html: customize.get('html_content'),
                }}
              />
            </strong>
          </span>
        </p>
      </section>
    );
  }
}

const text_re_7 =
  '<span style="color:#797979">快快加入易企微编辑器的大家庭</span>';
export { Text_Re_7_Ui, text_re_7 };
