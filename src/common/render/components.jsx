import React from 'react';
import VTextComponent from '../../ui/visual/text/vertical_components';
import HTextComponent from '../../ui/visual/text/horizontal_components';

import OneTextComponent from "../../ui/visual/text/one";
import TwoTextComponent from "../../ui/visual/text/two";
import ThreeTextComponent from "../../ui/visual/text/three";
import FourTextComponent from "../../ui/visual/text/four";
import FiveTextComponent from "../../ui/visual/text/five";
import SixTextComponent from "../../ui/visual/text/six";
import SevenTextComponent from "../../ui/visual/text/seven";


import UpImgComponent from '../../ui/visual/img/img_component';
import GridImgComponent from '../../ui/visual/img/grid_component';
import ListImgComponent from '../../ui/visual/img/list_component';
import SliderImgComponent from '../../ui/visual/img/slider_component';
import CarouselImgComponent from '../../ui/visual/img/carousel_component';
import MusicComponent from '../../ui/visual/music/music';
import VideoComponent from '../../ui/visual/video/video';
import GridMallComponent from '../../ui/visual/mall/grid_component';
import ListMallComponent from '../../ui/visual/mall/list_component';
import ButtonComponent from '../../ui/visual/button/button';
import FormComponent from '../../ui/visual/form_component/form';

/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @param choose 是否选中此组件
 * @param index 此组件号
 * @returns {*}
 */
export const render_component = (data, choose, index) => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.getIn(['customize','name'])) {

    /**==============文本类============**/
    case 'vertical_text':
      return <VTextComponent data={data} choose={choose} index={index} />;
    case 'horizontal_text':
      return <HTextComponent data={data} choose={choose} index={index} />;

    case "one_text":
      return <OneTextComponent data={data} choose={choose} index={index}/>;
    case "two_text":
      return <TwoTextComponent data={data} choose={choose} index={index}/>;
    case "three_text":
      return <ThreeTextComponent data={data} choose={choose} index={index}/>;
    case "four_text":
      return <FourTextComponent data={data} choose={choose} index={index}/>;
    case "five_text":
      return <FiveTextComponent data={data} choose={choose} index={index}/>;
    case "six_text":
      return <SixTextComponent data={data} choose={choose} index={index}/>;
    case "seven_text":
      return <SevenTextComponent data={data} choose={choose} index={index}/>;


    case 'single_img':
      return <UpImgComponent data={data} choose={choose} index={index} />;
    case 'grid_img':
      return <GridImgComponent data={data} choose={choose} index={index} />;
    case 'list_img':
      return <ListImgComponent data={data} choose={choose} index={index} />;
    case 'slider_img':
      return <SliderImgComponent data={data} choose={choose} index={index} />;
    case 'carousel_img':
      return <CarouselImgComponent data={data} choose={choose} index={index} />;

    case 'video':
      return <VideoComponent data={data} choose={choose} index={index} />;
    case 'music':
      return <MusicComponent data={data} choose={choose} index={index} />;
    case 'list_mall':
      return <ListMallComponent data={data} choose={choose} index={index} />;
    case 'grid_mall':
      return <GridMallComponent data={data} choose={choose} index={index} />;
    case 'button':
      return <ButtonComponent data={data} choose={choose} index={index} />;
    case 'form':
      return <FormComponent data={data} choose={choose} index={index} />;
    default:
      return '';
  }
};
