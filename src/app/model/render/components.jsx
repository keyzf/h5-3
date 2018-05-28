import React from "react";
import VTextComponent from "../../../components/text/vertical_components";
import HTextComponent from "../../../components/text/horizontal_components";
import UpImgComponent from "../../../components/img/img_component";
import GridImgComponent from "../../../components/img/grid_component";
import ListImgComponent from "../../../components/img/list_component";
import SliderImgComponent from "../../../components/img/slider_component";
import CarouselImgComponent from "../../../components/img/carousel_component";

export const render_component = (data, choose, index) => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.get("customize").get("name")) {
    /**==============文本类============**/
    case "vertical_text":
      return <VTextComponent data={data} choose={choose} index={index}/>;
    case "horizontal_text":
      return <HTextComponent data={data} choose={choose} index={index}/>;
    case "up_img":
      return <UpImgComponent data={data} choose={choose} index={index}/>;
    case "grid_img":
      return <GridImgComponent data={data} choose={choose} index={index}/>;
    case "list_img":
      return <ListImgComponent data={data} choose={choose} index={index}/>;
    case "slider_img":
      return <SliderImgComponent data={data} choose={choose} index={index}/>;
    case "carousel_img":
      return <CarouselImgComponent data={data} choose={choose} index={index}/>;
    default:
      return "";
  }
};
