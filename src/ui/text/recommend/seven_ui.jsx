import React, { PureComponent } from 'react';
/**
 * 接收数据
 * 1. html 信息
 */
class SevenTextUi extends PureComponent {
  render() {
    return (
      <div>
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
            marginTop: '-18px',
            zIndex: '-1',
            position: 'relative',
          }}
        >
          <img
            src={
              'https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E7%9F%A9%E5%BD%A26%402x.png'
            }
            alt={'img'}
          />
        </div>
      </div>
    );
  }
}

const seven_html_text = '<h2>主讲人</h2>';

export { SevenTextUi, seven_html_text };
