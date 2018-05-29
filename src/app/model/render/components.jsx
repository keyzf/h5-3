import React from 'react';
import VTextComponent from '../../../components/visual/text/vertical_components';
import HTextComponent from '../../../components/visual/text/horizontal_components';
import UpImgComponent from '../../../components/visual/img/img_component';
import GridImgComponent from '../../../components/visual/img/grid_component';
import ListImgComponent from '../../../components/visual/img/list_component';
import SliderImgComponent from '../../../components/visual/img/slider_component';
import CarouselImgComponent from '../../../components/visual/img/carousel_component';
import MusicComponent from '../../../components/visual/music/music';
import VideoComponent from '../../../components/visual/video/video';

export const render_component = (data, choose, index) => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.get('customize').get('name')) {
    /**==============文本类============**/
    case 'vertical_text':
      return <VTextComponent data={data} choose={choose} index={index} />;
    case 'horizontal_text':
      return <HTextComponent data={data} choose={choose} index={index} />;
    case 'up_img':
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
    default:
      return '';
  }
};
