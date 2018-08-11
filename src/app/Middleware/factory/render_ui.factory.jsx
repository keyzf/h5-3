import React from 'react';
import ProMusicUi from '../../../resources/music/core/music_ui';
import { VTextUi } from '../../../resources/text/core/vertical_ui';
import { HTextUi } from '../../../resources/text/core/horizontal_ui';
import { UpImgUi } from '../../../resources/img/core/img_component';
import { CarouselImgUI } from '../../../resources/img/core/carousel_component';
import { MusicUi } from '../../../resources/music/core/music_ui';
import { VideoUi } from '../../../resources/video/core/video_ui';
import { ButtonUi } from '../../../resources/button/core/button';
import FormUi from '../../../resources/form/recommend/form_ui_render';
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
import { Img1UI } from '../../../resources/img/recommend/img_re_1';
/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @returns {*}
 */
export const render_ui = (data, name) => {
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
    case 'carousel_img':
      return <CarouselImgUI data={data} />;
    case 'img_re_1':
      return <Img1UI data={data} />;

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
      if (name === 'show') {
        return <ProMusicUi data={data} />;
      } else {
        return <MusicUi data={data} />;
      }

    //  默认输出
    default:
      return '';
  }
};
