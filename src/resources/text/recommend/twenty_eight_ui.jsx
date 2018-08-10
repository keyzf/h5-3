import React, { PureComponent } from 'react';
import style from './text.module.scss';
class TwentyEightTextUi extends PureComponent {
  render() {
    return (
      <section className={style.text_28_1}>
        <section className={style.text_28_2}>
          <section className={style.text_28_3}>
            <section className={style.text_28_4}>
              <section
                className={style.text_28_5}
                style={{
                  borderBottomColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderTopColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
              <section
                className={style.text_28_6}
                style={{
                  borderRightColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderLeftColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
              <section
                className={style.text_28_7}
                style={{
                  borderLeftColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                  borderRightColor: `${
                    this.props.data.getIn(['advance', 'style_color'])
                      ? this.props.data.getIn(['advance', 'style_color'])
                      : '#57d9ff'
                  }`,
                }}
              />
            </section>
            <section className={style.text_28_8}>
              <section className={style.text_28_9}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.getIn([
                      'customize',
                      'html_content',
                    ]),
                  }}
                />
              </section>
            </section>
            <section className={style.text_28_10}>
              <section className={style.text_28_11}>
                <section
                  className={style.text_28_5}
                  style={{
                    borderBottomColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderTopColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
                <section
                  className={style.text_28_6}
                  style={{
                    borderRightColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderLeftColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
                <section
                  className={style.text_28_7}
                  style={{
                    borderLeftColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                    borderRightColor: `${
                      this.props.data.getIn(['advance', 'style_color'])
                        ? this.props.data.getIn(['advance', 'style_color'])
                        : '#57d9ff'
                    }`,
                  }}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

const twenty_eight_html_text = '你看到的是一个标题';
export { TwentyEightTextUi, twenty_eight_html_text };
