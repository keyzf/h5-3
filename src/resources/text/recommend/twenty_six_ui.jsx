import React, { PureComponent } from 'react';

class TwentySixTextUi extends PureComponent {
  render() {
    return (
      <section style={{ marginTop: '10px' }}>
        <section style={{ marginTop: '10px' }}>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '-9px',
            }}
          >
            <section
              style={{
                width: '16px',
                height: '16px',
                background: `${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
            <section
              style={{
                width: '16px',
                height: '16px',
                background: `${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
          </section>
          <section
            style={{
              margin: '0 7px',
              border: `2px dashed ${this.props.data.getIn([
                'advance',
                'style_color',
              ])}`,
              padding: '7px',
            }}
          >
            <section
              style={{
                border: `2px solid ${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
                padding: '20px 0',
              }}
            >
              <section style={{ padding: '0 15px', marginTop: '15px' }}>
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
          </section>
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '-9px',
            }}
          >
            <section
              style={{
                width: '16px',
                height: '16px',
                background: `${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
            <section
              style={{
                width: '16px',
                height: '16px',
                background: `${this.props.data.getIn([
                  'advance',
                  'style_color',
                ])}`,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const twenty_six_html_text =
  '舞蹈作品中的舞蹈动作也要具有一定的技艺性，舞蹈演员要具备跳跃、旋转、翻腾、柔软、控制等高难度的技巧能力，但是，表演高难度的技巧动作不是目的，而是一种人物感情、性格和精神面貌的一种手段。';

export { TwentySixTextUi, twenty_six_html_text };
