import React from "react";
import { Divider } from "antd";
import QueueAnim from "rc-queue-anim";
import { VideoTemplate } from "../../../components/template/video";


class VideoSelect extends React.Component {

  render() {
    return (
      <QueueAnim delay={200}>
        <div className={"components_hover"} key={1}>
          <VideoTemplate/>
        </div>
        <Divider orientation="left" >设计师推荐</Divider>
      </QueueAnim>
    );
  }
}

// hoc
export default VideoSelect;