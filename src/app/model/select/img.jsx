import React from "react";
import { Divider } from "antd";
import QueueAnim from "rc-queue-anim";
import {
  CarouselImgTemplate,
  GridImgTemplate,
  ListImgTemplate,
  SliderImgTemplate,
  UpImgTemplate
} from "../../../components/template/img";

class ImgSelect extends React.Component {
  render() {
    return (
      <QueueAnim delay={200}>
        <div className={"components_hover"} key={1}>
          <UpImgTemplate/>
        </div>
        <div className={"components_hover"} key={2}>
          <GridImgTemplate/>
        </div>
        <div className={"components_hover"} key={3}>
          <ListImgTemplate/>
        </div>
        <div className={"components_hover"} key={4}>
          <SliderImgTemplate/>
        </div>
        <div className={"components_hover"} key={5}>
          <CarouselImgTemplate/>
        </div>
        <Divider orientation="left">设计师推荐</Divider>
      </QueueAnim>

    );
  }
}


// hoc
export default ImgSelect;