import React, { PureComponent } from 'react';

class TwentyThreeTextUi extends PureComponent {
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
            src={'http://src.e7wei.com/0.07599329555662182.png'}
            alt={'img'}
          />
        </div>
      </React.Fragment>
    );
  }
}

const twenty_three_html_text = '<h3>先领券/后购物</h3>';

export { TwentyThreeTextUi, twenty_three_html_text };
