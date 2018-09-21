import React from "react";

class VideoUi extends React.Component {
  render() {
    const $$customize = this.props.data.get("customize");
    const advance =  this.props.data.get("advance");
    // 可编辑属性 data:为文本
    return (
      <div             style={{ width: `${advance.get('width')}px`, height: `${advance.get('height')}px`}}>
        {$$customize.get("share") !== "" ? (
          <div
            style={{width:"100%",height:'100%'}}
            dangerouslySetInnerHTML={{
              __html: $$customize.get("share")
            }}
          />
        ) : (
          <video width={`${advance.get('width')}`} height={`${advance.get('height')}`} controls>
            <source src={$$customize.get("video")} type="video/mp4"/>
          </video>
        )}
      </div>
    );
  }
}

export { VideoUi };
