import React from 'react';
import VTextComponent from '../../../components/visual/text/vertical_components';
import HTextComponent from '../../../components/visual/text/horizontal_components';

import OneTextComponent from "../../../components/visual/text/one";
import TwoTextComponent from "../../../components/visual/text/two";
import ThreeTextComponent from "../../../components/visual/text/three";
import FourTextComponent from "../../../components/visual/text/four";
import FiveTextComponent from "../../../components/visual/text/five";
import SixTextComponent from "../../../components/visual/text/six";
import SevenTextComponent from "../../../components/visual/text/seven";


import UpImgComponent from '../../../components/visual/img/img_component';
import GridImgComponent from '../../../components/visual/img/grid_component';
import ListImgComponent from '../../../components/visual/img/list_component';
import SliderImgComponent from '../../../components/visual/img/slider_component';
import CarouselImgComponent from '../../../components/visual/img/carousel_component';
import MusicComponent from '../../../components/visual/music/music';
import VideoComponent from '../../../components/visual/video/video';
import GridMallComponent from '../../../components/visual/mall/grid_component';
import ListMallComponent from '../../../components/visual/mall/list_component';
import ButtonComponent from '../../../components/visual/button/button';
import FormComponent from '../../../components/visual/form_component/form';

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
