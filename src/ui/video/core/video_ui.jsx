import React from 'react';

class VideoUi extends React.Component {
  render() {
    const $$customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    return (
      <span>
        {$$customize.get('share') !== '' ? (
          <div
            dangerouslySetInnerHTML={{
              __html: $$customize.get('share'),
            }}
          />
        ) : (
          <video width="100%" height="100%" controls>
            <source src={$$customize.get('video')} type="video/mp4" />
          </video>
        )}
      </span>
    );
  }
}

export { VideoUi };
