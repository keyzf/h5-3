import React, { PureComponent } from 'react';
import style from './text.module.scss';

class Text_Re_48_Ui extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    return (
      <section className={style.text_48_1}>
        <section
          className={style.text_48_2}
          style={{
            backgroundColor: `${
              advance.get('style_color')
                ? advance.get('style_color')
                : '#f58fc6'
            }`,
          }}
        >
          <section className={style.text_48_3}>
            <section className={style.text_48_4} />
            <section className={style.text_48_5} />
            <section className={style.text_48_6}>
              <section className={style.text_48_7}>
                <p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: customize.get('html_content'),
                    }}
                  />
                </p>
              </section>
            </section>
            <section className={style.text_48_8} />
            <section className={style.text_48_9} />
          </section>
        </section>
      </section>
    );
  }
}

const text_re_48 =
  '从生命的开始，见到第一缕阳光，你就一直在我身旁，和我一起成长，一起历经人生的酸甜苦辣，有时颓废，有时忧伤，你都沉默的拍拍我的肩膀；有时快乐，有时幸福，你都会飞扬的随着我手舞足蹈。';
export { Text_Re_48_Ui, text_re_48 };
