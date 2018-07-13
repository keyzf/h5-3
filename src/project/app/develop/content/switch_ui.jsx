import React from 'react';
import { VTextUi } from '../../../../ui/text/core/vertical_ui';
import { HTextUi } from '../../../../ui/text/core/horizontal_ui';
import { OneTextUi } from '../../../../ui/text/recommend/one_ui';
import { TwoTextUi } from '../../../../ui/text/recommend/two_ui';
import { ThreeTextUi } from '../../../../ui/text/recommend/three_ui';
import { FourTextUi } from '../../../../ui/text/recommend/four_ui';
import { FiveTextUi } from '../../../../ui/text/recommend/five_ui';
import { SixTextUi } from '../../../../ui/text/recommend/six_ui';
import { SevenTextUi } from '../../../../ui/text/recommend/seven_ui';
import { EightTextUi } from '../../../../ui/text/recommend/eight_ui';
import { NineTextUi } from '../../../../ui/text/recommend/nine_ui';
import { TenTextUi } from '../../../../ui/text/recommend/ten_ui';
import { ElevenTextUi } from '../../../../ui/text/recommend/eleven_ui';
import { TwelveTextUi } from '../../../../ui/text/recommend/twelve_ui';
import { ThirteenTextUi } from '../../../../ui/text/recommend/thirteen_ui';
import { FourTeenTextUi } from '../../../../ui/text/recommend/fourteen_ui';
import { FifteenTextUi } from '../../../../ui/text/recommend/fifteen_ui';
import { SixTeenTextUi } from '../../../../ui/text/recommend/sixteen_ui';
import { SevenTeenTextUi } from '../../../../ui/text/recommend/seventeen_ui';
import { EighteenTextUi } from '../../../../ui/text/recommend/eighteen_ui';
import { NineTeenTextUi } from '../../../../ui/text/recommend/nineteen_ui';
import { TwentyTextUi } from '../../../../ui/text/recommend/twenty_ui';
import { UpImgUi } from '../../../../ui/img/core/img_component';
import { GridImgUi } from '../../../../ui/img/core/grid_component';
import { ListImgUi } from '../../../../ui/img/core/list_component';
import { SliderImgUI } from '../../../../ui/img/core/slider_component';
import { CarouselImgUI } from '../../../../ui/img/core/carousel_component';
import { OneImgUi } from '../../../../ui/img/recommend/one_img_ui';
import { TwoImgUi } from '../../../../ui/img/recommend/two_img_ui';
import { ThreeImgUi } from '../../../../ui/img/recommend/three_img_ui';
import { MusicUi } from '../../../../ui/music/core/music_ui';
import { VideoUi } from '../../../../ui/video/core/video_ui';
import { GridMallUi } from '../../../../ui/mall/core/grid_ui';
import { ListMallUi } from '../../../../ui/mall/core/list_ui';
import { OneMallUi } from '../../../../ui/mall/recommend/one_mall_ui';
import { ButtonUi } from '../../../../ui/button/core/button';
import { OneButtonUi } from '../../../../ui/button/recommend/one_button_ui';
import { FormUi } from '../../../../ui/form/recommend/form_ui_render';
import { FourImgUi } from '../../../../ui/img/recommend/four_img_ui';
import { TwentyOneTextUi } from '../../../../ui/text/recommend/twenty_one_ui';
import { FiveImgUi } from '../../../../ui/img/recommend/five_img_ui';
import { TwentyTwoTextUi } from '../../../../ui/text/recommend/twenty_two_ui';
import { TwoMallUi } from '../../../../ui/mall/recommend/two_mall_ui';
import { TwentyThreeTextUi } from '../../../../ui/text/recommend/twenty_three_ui';
import { ThreeMallUi } from '../../../../ui/mall/recommend/three_mall_ui';
import { FourMallUi } from '../../../../ui/mall/recommend/four_mall_ui';
import { TwentyFourTextUi } from '../../../../ui/text/recommend/twenty_four_ui';
import { FiveMallUi } from '../../../../ui/mall/recommend/five_mall_ui';
import { SixMallUi } from '../../../../ui/mall/recommend/six_mall_ui';
import { SevenMallUi } from '../../../../ui/mall/recommend/seven_mall_ui';

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
    case 'nineteen_text':
      return (
        <NineTeenTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'twenty_text':
      return <TwentyTextUi html={data.getIn(['customize', 'html_content'])} />;
    case 'twenty_one_text':
      return (
        <TwentyOneTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'twenty_two_text':
      return (
        <TwentyTwoTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'twenty_three_text':
      return (
        <TwentyThreeTextUi html={data.getIn(['customize', 'html_content'])} />
      );
    case 'twenty_four_text':
      return (
        <TwentyFourTextUi html={data.getIn(['customize', 'html_content'])} />
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
    case 'four_img':
      return <FourImgUi data={data} />;
    case 'five_img':
      return <FiveImgUi data={data} />;
    //  商品类
    case 'list_mall':
      return <ListMallUi data={data} />;
    case 'grid_mall':
      return <GridMallUi data={data} />;
    case 'one_mall':
      return <OneMallUi data={data} />;
    case 'two_mall':
      return <TwoMallUi data={data} />;
    case 'three_mall':
      return <ThreeMallUi data={data} />;
    case 'four_mall':
      return <FourMallUi data={data} />;
    case 'five_mall':
      return <FiveMallUi data={data} />;
    case 'six_mall':
      return <SixMallUi data={data} />;
    case 'seven_mall':
      return <SevenMallUi data={data} />;
    //  按钮类
    case 'button':
      return <ButtonUi data={data} />;
    case 'one_button':
      return <OneButtonUi data={data} />;
    //  表单类
    case 'form':
      return <FormUi data={data} />;
    // 媒体类
    case 'video':
      return <VideoUi data={data} />;
    //  音乐类
    case 'music':
      return <MusicUi data={data} />;
    //  默认输出
    default:
      return '';
  }
};