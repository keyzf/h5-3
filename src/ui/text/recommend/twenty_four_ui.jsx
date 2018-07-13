import React, { PureComponent } from 'react';

class TwentyFourTextUi extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.html,
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '-22px',
            zIndex: '-1',
            position: 'relative',
          }}
        >
          <img
            width={150}
            height={30}
            src={'http://src.e7wei.com/0.36995281081452336.png'}
            alt={'img'}
          />
        </div>
      </React.Fragment>
    );
  }
}

const twenty_four_html_text = '<h3>学生作品</h3>';

export { TwentyFourTextUi, twenty_four_html_text };
