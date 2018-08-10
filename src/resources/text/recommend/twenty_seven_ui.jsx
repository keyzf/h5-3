import React, { PureComponent } from 'react';

class TwentySevenTextUi extends PureComponent {
  render() {
    return (
      <section
        style={{
          fontFamily: '&quot;microsoft YaHei&quot',
          marginTop: '10px',
          border: '0 none',
          padding: '0',
        }}
      >
        <section style={{ textAlign: 'center' }}>
          <section
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <section
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
            <section
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.data.getIn(['customize', 'html_content']),
              }}
            />
            <section
              style={{
                width: '25px',
                height: '25px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
                marginLeft: '5px',
              }}
            />
            <section
              style={{
                width: '15px',
                height: '15px',
                borderRadius: '100%',
                background: `${
                  this.props.data.getIn(['advance', 'style_color'])
                    ? this.props.data.getIn(['advance', 'style_color'])
                    : 'yellow'
                }`,
                marginRight: '5px',
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

const twenty_seven_html_text = '维护贴士';
export { TwentySevenTextUi, twenty_seven_html_text };
