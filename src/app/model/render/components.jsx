import React from 'react';
import VTextComponent from '../../../components/text/vertical_components';
import HTextComponent from '../../../components/text/horizontal_components';

// import OneTextComponent from "../../components/operating_ui/text/one";
// import TwoTextComponent from "../../components/operating_ui/text/two";
// import ThreeTextComponent from "../../components/operating_ui/text/three";
// import FourTextComponent from "../../components/operating_ui/text/four";
// import FiveTextComponent from "../../components/operating_ui/text/five";
// import SixTextComponent from "../../components/operating_ui/text/six";
// import SevenTextComponent from "../../components/operating_ui/text/seven";
// import UpImgComponent from "../../components/operating_ui/img/img_component";
// import GridImgComponent from "../../components/operating_ui/img/grid_component";
// import ListImgComponent from "../../components/operating_ui/img/list_component";
// import SliderImgComponent from "../../components/operating_ui/img/slider_component";
// import CarouselImgComponent from "../../components/operating_ui/img/carousel_component";

export const render_component = (data, choose, index) => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.get('customize').get('name')) {
    /**==============文本类============**/
    case 'vertical_text':
      return <VTextComponent data={data} choose={choose} index={index} />;
    case 'horizontal_text':
      return <HTextComponent data={data} choose={choose} index={index} />;
    // case "one_text":
    //   return <OneTextComponent data={data} choose={choose} index={index}/>;
    // case "two_text":
    //   return <TwoTextComponent data={data} choose={choose} index={index}/>;
    // case "three_text":
    //   return <ThreeTextComponent data={data} choose={choose} index={index}/>;
    // case "four_text":
    //   return <FourTextComponent data={data} choose={choose} index={index}/>;
    // case "five_text":
    //   return <FiveTextComponent data={data} choose={choose} index={index}/>;
    // case "six_text":
    //   return <SixTextComponent data={data} choose={choose} index={index}/>;
    // case "seven_text":
    //   return <SevenTextComponent data={data} choose={choose} index={index}/>;
    // case "up_img":
    //   return <UpImgComponent data={data} choose={choose} index={index}/>;
    // case "grid_img":
    //   return <GridImgComponent data={data} choose={choose} index={index}/>;
    // case "list_img":
    //   return <ListImgComponent data={data} choose={choose} index={index}/>;
    // case "slider_img":
    //   return <SliderImgComponent data={data} choose={choose} index={index}/>;
    // case "carousel_img":
    //   return <CarouselImgComponent data={data} choose={choose} index={index}/>;

    default:
      return '';
  }
};
