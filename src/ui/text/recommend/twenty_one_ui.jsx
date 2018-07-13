import React, { PureComponent } from 'react';

class TwentyOneTextUi extends PureComponent {
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
            marginTop: '-30px',
            zIndex: '-1',
            position: 'relative',
          }}
        >
          <img
            width={150}
            height={30}
            src={'http://src.e7wei.com/0.021600115237185635.png'}
            alt={'img'}
          />
        </div>
      </React.Fragment>
    );
  }
}

const twenty_one_html_text = '<h2>学生作品</h2>';

export { TwentyOneTextUi, twenty_one_html_text };
