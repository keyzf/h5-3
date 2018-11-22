import * as React from "react";
import Video0 from "./video-0";

const RenderVideo = React.memo((props:{data:any}) => {

  const switchUi = {
    0: () => <Video0 data={props.data}/>
  };
  const VideoUiRender = switchUi[props.data.common.id];
  return <VideoUiRender/>;

});


export default RenderVideo;
