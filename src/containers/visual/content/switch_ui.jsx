import React from 'react';

//text
import { VTextUi } from '../../../ui/text/core/vertical_ui';
import { HTextUi } from '../../../ui/text/core/horizontal_ui';
import { OneTextUi } from '../../../ui/text/recommend/one_ui';
import { TwoTextUi } from '../../../ui/text/recommend/two_ui';
import { ThreeTextUi } from '../../../ui/text/recommend/three_ui';
import { FourTextUi } from '../../../ui/text/recommend/four_ui';
import { FiveTextUi } from '../../../ui/text/recommend/five_ui';
import { SixTextUi } from '../../../ui/text/recommend/six_ui';
import { SevenTextUi } from '../../../ui/text/recommend/seven_ui';
import { EightTextUi } from '../../../ui/text/recommend/eight_ui';
import { NineTextUi } from '../../../ui/text/recommend/nine_ui';
import { TenTextUi } from '../../../ui/text/recommend/ten_ui';
import { ElevenTextUi } from '../../../ui/text/recommend/eleven_ui';
import { TwelveTextUi } from '../../../ui/text/recommend/twelve_ui';
import { ThirteenTextUi } from '../../../ui/text/recommend/thirteen_ui';
import { FourTeenTextUi } from '../../../ui/text/recommend/fourteen_ui';
import { FifteenTextUi } from '../../../ui/text/recommend/fifteen_ui';
import { SixTeenTextUi } from '../../../ui/text/recommend/sixteen_ui';
import { SevenTeenTextUi } from '../../../ui/text/recommend/seventeen_ui';
import { EighteenTextUi } from '../../../ui/text/recommend/eighteen_ui';
// 图片
import { UpImgUi } from '../../../ui/img/core/img_component';
import { GridImgUi } from '../../../ui/img/core/grid_component';
import { ListImgUi } from '../../../ui/img/core/list_component';
import { SliderImgUI } from '../../../ui/img/core/slider_component';
import { CarouselImgUI } from '../../../ui/img/core/carousel_component';
import { TwoImgUi } from '../../../ui/img/recommend/two_img_ui';
import { ThreeImgUi } from '../../../ui/img/recommend/three_img_ui';
// 音乐
import { MusicUi } from '../../../ui/music/core/music_ui';
// 视频
import { VideoUi } from '../../../ui/video/core/video_ui';
// 商品列表
import { GridMallUi } from '../../../ui/mall/core/grid_ui';
import { ListMallUi } from '../../../ui/mall/core/list_ui';
// 按钮
import { ButtonUi } from '../../../ui/button/core/button';
// 表单
import { FormUi } from '../../../ui/form/form_ui_render';

import { OneImgUi } from '../../../ui/img/recommend/one_img_ui';
import { OneMallUi } from '../../../ui/mall/recommend/one_mall_ui';
import { OneButtonUi } from '../../../ui/button/recommend/one_button_ui';

/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @returns {*}
 */
export const switch_ui = data => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.getIn(['customize', 'name'])) {
    //文本类
    case 'vertical_text':
      return <VTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'horizontal_text':
      return <HTextUi html={data.getIn(['customize', 'html_content'])} />;
    //文本类 （推荐组件）
    case 'one_text':
      return <OneTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'two_text':
      return <TwoTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'three_text':
      return <ThreeTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'four_text':
      return <FourTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'five_text':
      return <FiveTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'six_text':
      return <SixTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'seven_text':
      return <SevenTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'eight_text':
      return <EightTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'nine_text':
      return <NineTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'ten_text':
      return <TenTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'eleven_text':
      return <ElevenTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'twelve_text':
      return <TwelveTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'thirteen_text':
      return (
        <ThirteenTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'fourteen_text':
      return (
        <FourTeenTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'fifteen_text':
      return <FifteenTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'sixteen_text':
      return <SixTeenTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'seventeen_text':
      return (
        <SevenTeenTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'eighteen_text':
      return (
        <EighteenTextUi html={data.getIn(['customize', 'html_content'])} />
      );

    // 图片类
    case 'single_img':
      return <UpImgUi data={data} />;
    case 'grid_img':
      return <GridImgUi data={data} />;
    case 'list_img':
      return <ListImgUi data={data} />;
    case 'slider_img':
      return <SliderImgUI data={data} />;
    case 'carousel_img':
      return <CarouselImgUI data={data} />;
    case 'one_img':
      return <OneImgUi data={data} />;
    case 'two_img':
      return <TwoImgUi data={data} />;
    case 'three_img':
      return <ThreeImgUi data={data} />;
    // 媒体类
    case 'video':
      return <VideoUi data={data} />;
    //  音乐类
    case 'music':
      return <MusicUi data={data} />;

    //  列表类
    case 'list_mall':
      return <ListMallUi data={data} />;
    case 'grid_mall':
      return <GridMallUi data={data} />;
    case 'one_mall':
      return <OneMallUi data={data} />;

    //  按钮类
    case 'button':
      return <ButtonUi data={data} />;
    case 'one_button':
      return <OneButtonUi data={data} />;
    //  表单类
    case 'form':
      return <FormUi data={data} />;

    case 'one_form':
      return <FormUi data={data} />;
    //  默认输出
    default:
      return '';
  }
};
