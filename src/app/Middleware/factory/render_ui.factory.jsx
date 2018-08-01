import React from 'react';
import { VTextUi } from '../../../resources/text/core/vertical_ui';
import { HTextUi } from '../../../resources/text/core/horizontal_ui';
import { UpImgUi } from '../../../resources/img/core/img_component';
import { GridImgUi } from '../../../resources/img/core/grid_component';
import { ListImgUi } from '../../../resources/img/core/list_component';
import { SliderImgUI } from '../../../resources/img/core/slider_component';
import { CarouselImgUI } from '../../../resources/img/core/carousel_component';
import { OneImgUi } from '../../../resources/img/recommend/old_ui/one_img_ui';
import { TwoImgUi } from '../../../resources/img/recommend/old_ui/two_img_ui';
import { ThreeImgUi } from '../../../resources/img/recommend/old_ui/three_img_ui';
import { MusicUi } from '../../../resources/music/core/music_ui';
import { VideoUi } from '../../../resources/video/core/video_ui';
import { GridMallUi } from '../../../resources/mall/core/grid_ui';
import { ListMallUi } from '../../../resources/mall/core/list_ui';
import { OneMallUi } from '../../../resources/mall/recommend/one_mall_ui';
import { ButtonUi } from '../../../resources/button/core/button';
import FormUi from '../../../resources/form/recommend/form_ui_render';
import { FourImgUi } from '../../../resources/img/recommend/old_ui/four_img_ui';
import { FiveImgUi } from '../../../resources/img/recommend/old_ui/five_img_ui';
import { TwoMallUi } from '../../../resources/mall/recommend/two_mall_ui';
import { ThreeMallUi } from '../../../resources/mall/recommend/three_mall_ui';
import { FourMallUi } from '../../../resources/mall/recommend/four_mall_ui';
import { FiveMallUi } from '../../../resources/mall/recommend/five_mall_ui';
import { SixMallUi } from '../../../resources/mall/recommend/six_mall_ui';
import { SevenMallUi } from '../../../resources/mall/recommend/seven_mall_ui';
import { TwentyFiveTextUi } from '../../../resources/text/recommend/twenty_five_ui';
import { TwentySixTextUi } from '../../../resources/text/recommend/twenty_six_ui';
import { TwentySevenTextUi } from '../../../resources/text/recommend/twenty_seven_ui';
import { TwentyEightTextUi } from '../../../resources/text/recommend/twenty_eight_ui';
import { TwentyNineTextUi } from '../../../resources/text/recommend/twenty_nine_ui';
import { ThirtyTextUi } from '../../../resources/text/recommend/thirty_ui';
import { ThirtyOneTextUi } from '../../../resources/text/recommend/thirty_one_ui';
import { ThirtyTwoTextUi } from '../../../resources/text/recommend/thirty_two_ui';
import { ThirtyThreeTextUi } from '../../../resources/text/recommend/thirty_three_ui';
import { Text_Re_1_Ui } from '../../../resources/text/recommend/text_re_1';
import { Text_Re_2_Ui } from '../../../resources/text/recommend/text_re_2';
import { Btn1Ui } from '../../../resources/button/recommend/btn_re_1';
import { Btn2Ui } from '../../../resources/button/recommend/btn_re_2';
import { Btn3Ui } from '../../../resources/button/recommend/btn_re_3';
import { Btn4Ui } from '../../../resources/button/recommend/btn_re_4';
import { Btn5Ui } from '../../../resources/button/recommend/btn_re_5';
import { Btn6Ui } from '../../../resources/button/recommend/btn_re_6';
import { Btn7Ui } from '../../../resources/button/recommend/btn_re_7';

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
    case 'text_re_1':
      return <Text_Re_1_Ui data={data} />;
    case 'text_re_2':
      return <Text_Re_2_Ui data={data} />;
    case 'twenty_five_text':
      return <TwentyFiveTextUi data={data} />;
    case 'twenty_six_text':
      return <TwentySixTextUi data={data} />;
    case 'twenty_seven_text':
      return <TwentySevenTextUi data={data} />;
    case 'twenty_eight_text':
      return <TwentyEightTextUi data={data} />;
    case 'twenty_nine_text':
      return <TwentyNineTextUi data={data} />;
    case 'thirty_text':
      return <ThirtyTextUi data={data} />;
    case 'thirty_one_text':
      return <ThirtyOneTextUi data={data} />;
    case 'thirty_two_text':
      return <ThirtyTwoTextUi data={data} />;
    case 'thirty_three_text':
      return <ThirtyThreeTextUi data={data} />;
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
    case 'btn_re_1':
      return <Btn1Ui data={data} />;
    case 'btn_re_2':
      return <Btn2Ui data={data} />;
    case 'btn_re_3':
      return <Btn3Ui data={data} />;
    case 'btn_re_4':
      return <Btn4Ui data={data} />;
    case 'btn_re_5':
      return <Btn5Ui data={data} />;
    case 'btn_re_6':
      return <Btn6Ui data={data} />;
    case 'btn_re_7':
      return <Btn7Ui data={data} />;
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
