import React from 'react';
import { VTextUi } from '../../../resources/text/core/vertical_ui';
import { HTextUi } from '../../../resources/text/core/horizontal_ui';
import { OneTextUi } from '../../../resources/text/recommend/one_ui';
import { TwoTextUi } from '../../../resources/text/recommend/two_ui';
import { ThreeTextUi } from '../../../resources/text/recommend/three_ui';
import { FourTextUi } from '../../../resources/text/recommend/four_ui';
import { FiveTextUi } from '../../../resources/text/recommend/five_ui';
import { SixTextUi } from '../../../resources/text/recommend/six_ui';
import { SevenTextUi } from '../../../resources/text/recommend/seven_ui';
import { EightTextUi } from '../../../resources/text/recommend/eight_ui';
import { NineTextUi } from '../../../resources/text/recommend/nine_ui';
import { TenTextUi } from '../../../resources/text/recommend/ten_ui';
import { ElevenTextUi } from '../../../resources/text/recommend/eleven_ui';
import { TwelveTextUi } from '../../../resources/text/recommend/twelve_ui';
import { ThirteenTextUi } from '../../../resources/text/recommend/thirteen_ui';
import { FourTeenTextUi } from '../../../resources/text/recommend/fourteen_ui';
import { FifteenTextUi } from '../../../resources/text/recommend/fifteen_ui';
import { SixTeenTextUi } from '../../../resources/text/recommend/sixteen_ui';
import { SevenTeenTextUi } from '../../../resources/text/recommend/seventeen_ui';
import { EighteenTextUi } from '../../../resources/text/recommend/eighteen_ui';
import { NineTeenTextUi } from '../../../resources/text/recommend/nineteen_ui';
import { TwentyTextUi } from '../../../resources/text/recommend/twenty_ui';
import { UpImgUi } from '../../../resources/img/core/img_component';
import { GridImgUi } from '../../../resources/img/core/grid_component';
import { ListImgUi } from '../../../resources/img/core/list_component';
import { SliderImgUI } from '../../../resources/img/core/slider_component';
import { CarouselImgUI } from '../../../resources/img/core/carousel_component';
import { OneImgUi } from '../../../resources/img/recommend/one_img_ui';
import { TwoImgUi } from '../../../resources/img/recommend/two_img_ui';
import { ThreeImgUi } from '../../../resources/img/recommend/three_img_ui';
import { MusicUi } from '../../../resources/music/core/music_ui';
import { VideoUi } from '../../../resources/video/core/video_ui';
import { GridMallUi } from '../../../resources/mall/core/grid_ui';
import { ListMallUi } from '../../../resources/mall/core/list_ui';
import { OneMallUi } from '../../../resources/mall/recommend/one_mall_ui';
import { ButtonUi } from '../../../resources/button/core/button';
import { OneButtonUi } from '../../../resources/button/recommend/one_button_ui';
import FormUi from '../../../resources/form/recommend/form_ui_render';
import { FourImgUi } from '../../../resources/img/recommend/four_img_ui';
import { TwentyOneTextUi } from '../../../resources/text/recommend/twenty_one_ui';
import { FiveImgUi } from '../../../resources/img/recommend/five_img_ui';
import { TwentyTwoTextUi } from '../../../resources/text/recommend/twenty_two_ui';
import { TwoMallUi } from '../../../resources/mall/recommend/two_mall_ui';
import { TwentyThreeTextUi } from '../../../resources/text/recommend/twenty_three_ui';
import { ThreeMallUi } from '../../../resources/mall/recommend/three_mall_ui';
import { FourMallUi } from '../../../resources/mall/recommend/four_mall_ui';
import { TwentyFourTextUi } from '../../../resources/text/recommend/twenty_four_ui';
import { FiveMallUi } from '../../../resources/mall/recommend/five_mall_ui';
import { SixMallUi } from '../../../resources/mall/recommend/six_mall_ui';
import { SevenMallUi } from '../../../resources/mall/recommend/seven_mall_ui';
import { TwentyFiveTextUi } from '../../../resources/text/recommend/twenty_five_ui';
import { TwentySixTextUi } from '../../../resources/text/recommend/twenty_six_ui';
import { TwentySevenTextUi } from '../../../resources/text/recommend/twenty_seven_ui';
import { TwoButtonUi } from '../../../resources/button/recommend/two_button_ui';
import { ThreeButtonUi } from '../../../resources/button/recommend/three_button_ui';
import { FourButtonUi } from '../../../resources/button/recommend/four_button_ui';

/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @returns {*}
 */
export const render_ui = data => {
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
    case 'twenty_five_text':
      return <TwentyFiveTextUi data={data} />;
    case 'twenty_six_text':
      return <TwentySixTextUi data={data} />;
    case 'twenty_seven_text':
      return <TwentySevenTextUi data={data} />;
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
    case 'two_button':
      return <TwoButtonUi data={data} />;
    case 'three_button':
      return <ThreeButtonUi data={data} />;
    case 'four_button':
      return <FourButtonUi data={data} />;
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
