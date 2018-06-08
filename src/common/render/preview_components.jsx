import React from "react";
import HTextPreview from "../../ui/preview/text/horizontal_components";
import VTextPreview from "../../ui/preview/text/vertical_components";
import OneTextPreview from "../../ui/preview/text/one";
import TwoTextPreview from "../../ui/preview/text/two";
import ThreeTextPreview from "../../ui/preview/text/three";
import FiveTextPreview from "../../ui/preview/text/five";
import SixTextPreview from "../../ui/preview/text/six";
import SevenTextPreview from "../../ui/preview/text/seven";
import FourTextPreview from "../../ui/preview/text/four";
import UpImgPreview from "../../ui/preview/img/img_component";
import GridImgPreview from "../../ui/preview/img/grid_component";
import ListImgPreview from "../../ui/preview/img/list_component";
import SliderImgPreview from "../../ui/preview/img/slider_component";
import CarouselImgPreview from "../../ui/preview/img/carousel_component";

export const preview_render_component = data => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.get("customize").get("name")) {
    /**==============文本类============**/
    case "vertical_text":
      return <VTextPreview data={data}/>;
    case "horizontal_text":
      return <HTextPreview data={data}/>;
    case "one_text":
      return <OneTextPreview data={data}/>;
    case "two_text":
      return <TwoTextPreview data={data}/>;
    case "three_text":
      return <ThreeTextPreview data={data}/>;
    case "four_text":
      return <FourTextPreview data={data}/>;
    case "five_text":
      return <FiveTextPreview data={data}/>;
    case "six_text":
      return <SixTextPreview data={data}/>;
    case "seven_text":
      return <SevenTextPreview data={data}/>;

    case "single_img":
      return <UpImgPreview data={data}/>;
    case "grid_img":
      return <GridImgPreview data={data}/>;
    case "list_img":
      return <ListImgPreview data={data}/>;
    case "slider_img":
      return <SliderImgPreview data={data}/>;
    case "carousel_img":
      return <CarouselImgPreview data={data}/>;

    default:
      return "";
  }
};
