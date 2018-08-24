import React from 'react';
import { VTextUi } from '../../../resources/text/core/vertical_ui';
import { HTextUi } from '../../../resources/text/core/horizontal_ui';
import { UpImgUi } from '../../../resources/img/core/img_component';
import { CarouselImgUI } from '../../../resources/img/core/carousel_component';
import { VideoUi } from '../../../resources/video/core/video_ui';
import { ButtonUi } from '../../../resources/button/core/button';
import { FormUi } from '../../../routes/web.route';
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
import { Text_Re_3_Ui } from '../../../resources/text/recommend/text_re_3';
import { Text_Re_4_Ui } from '../../../resources/text/recommend/text_re_4';
import { Text_Re_5_Ui } from '../../../resources/text/recommend/text_re_5';
import { Text_Re_6_Ui } from '../../../resources/text/recommend/text_re_6';
import { Text_Re_7_Ui } from '../../../resources/text/recommend/text_re_7';
import { Text_Re_8_Ui } from '../../../resources/text/recommend/text_re_8';
import { Text_Re_9_Ui } from '../../../resources/text/recommend/text_re_9';
import { Text_Re_10_Ui } from '../../../resources/text/recommend/text_re_10';
import { Text_Re_11_Ui } from '../../../resources/text/recommend/text_re_11';
import { Text_Re_12_Ui } from '../../../resources/text/recommend/text_re_12';
import { Text_Re_13_Ui } from '../../../resources/text/recommend/text_re_13';
import { Text_Re_14_Ui } from '../../../resources/text/recommend/text_re_14';
import { Text_Re_15_Ui } from '../../../resources/text/recommend/text_re_15';
import { Text_Re_16_Ui } from '../../../resources/text/recommend/text_re_16';
import { Text_Re_17_Ui } from '../../../resources/text/recommend/text_re_17';
import { Text_Re_18_Ui } from '../../../resources/text/recommend/text_re_18';
import { Text_Re_19_Ui } from '../../../resources/text/recommend/text_re_19';
import { Text_Re_20_Ui } from '../../../resources/text/recommend/text_re_20';
import { Text_Re_21_Ui } from '../../../resources/text/recommend/text_re_21';
import { Text_Re_22_Ui } from '../../../resources/text/recommend/text_re_22';
import { Text_Re_23_Ui } from '../../../resources/text/recommend/text_re_23';
import { Text_Re_24_Ui } from '../../../resources/text/recommend/text_re_24';
import { Text_Re_25_Ui } from '../../../resources/text/recommend/text_re_25';
import { Text_Re_26_Ui } from '../../../resources/text/recommend/text_re_26';
import { Text_Re_27_Ui } from '../../../resources/text/recommend/text_re_27';
import { Text_Re_34_Ui } from '../../../resources/text/recommend/text_re_34';
import { Text_Re_35_Ui } from '../../../resources/text/recommend/text_re_35';
import { Text_Re_36_Ui } from '../../../resources/text/recommend/text_re_36';
import { Text_Re_37_Ui } from '../../../resources/text/recommend/text_re_37';
import { Text_Re_38_Ui } from '../../../resources/text/recommend/text_re_38';
import { Text_Re_39_Ui } from '../../../resources/text/recommend/text_re_39';
import { Text_Re_40_Ui } from '../../../resources/text/recommend/text_re_40';
import { Text_Re_41_Ui } from '../../../resources/text/recommend/text_re_41';
import { Text_Re_42_Ui } from '../../../resources/text/recommend/text_re_42';
import { Text_Re_43_Ui } from '../../../resources/text/recommend/text_re_43';
import { Text_Re_44_Ui } from '../../../resources/text/recommend/text_re_44';
import { Text_Re_45_Ui } from '../../../resources/text/recommend/text_re_45';
import { Text_Re_46_Ui } from '../../../resources/text/recommend/text_re_46';
import { Text_Re_47_Ui } from '../../../resources/text/recommend/text_re_47';
import { Text_Re_48_Ui } from '../../../resources/text/recommend/text_re_48';
import { Text_Re_49_Ui } from '../../../resources/text/recommend/text_re_49';
import { Text_Re_50_Ui } from '../../../resources/text/recommend/text_re_50';
import { Text_Re_51_Ui } from '../../../resources/text/recommend/text_re_51';
import { Text_Re_52_Ui } from '../../../resources/text/recommend/text_re_52';
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
    case 'text_re_3':
      return <Text_Re_3_Ui data={data} />;
    case 'text_re_4':
      return <Text_Re_4_Ui data={data} />;
    case 'text_re_5':
      return <Text_Re_5_Ui data={data} />;
    case 'text_re_6':
      return <Text_Re_6_Ui data={data} />;
    case 'text_re_7':
      return <Text_Re_7_Ui data={data} />;
    case 'text_re_8':
      return <Text_Re_8_Ui data={data} />;
    case 'text_re_9':
      return <Text_Re_9_Ui data={data} />;
    case 'text_re_10':
      return <Text_Re_10_Ui data={data} />;
    case 'text_re_11':
      return <Text_Re_11_Ui data={data} />;
    case 'text_re_12':
      return <Text_Re_12_Ui data={data} />;
    case 'text_re_13':
      return <Text_Re_13_Ui data={data} />;
    case 'text_re_14':
      return <Text_Re_14_Ui data={data} />;
    case 'text_re_15':
      return <Text_Re_15_Ui data={data} />;
    case 'text_re_16':
      return <Text_Re_16_Ui data={data} />;
    case 'text_re_17':
      return <Text_Re_17_Ui data={data} />;
    case 'text_re_18':
      return <Text_Re_18_Ui data={data} />;
    case 'text_re_19':
      return <Text_Re_19_Ui data={data} />;
    case 'text_re_20':
      return <Text_Re_20_Ui data={data} />;
    case 'text_re_21':
      return <Text_Re_21_Ui data={data} />;
    case 'text_re_22':
      return <Text_Re_22_Ui data={data} />;
    case 'text_re_23':
      return <Text_Re_23_Ui data={data} />;
    case 'text_re_24':
      return <Text_Re_24_Ui data={data} />;
    case 'text_re_25':
      return <Text_Re_25_Ui data={data} />;
    case 'text_re_26':
      return <Text_Re_26_Ui data={data} />;
    case 'text_re_27':
      return <Text_Re_27_Ui data={data} />;
    case 'text_re_34':
      return <Text_Re_34_Ui data={data} />;
    case 'text_re_35':
      return <Text_Re_35_Ui data={data} />;
    case 'text_re_36':
      return <Text_Re_36_Ui data={data} />;
    case 'text_re_37':
      return <Text_Re_37_Ui data={data} />;
    case 'text_re_38':
      return <Text_Re_38_Ui data={data} />;
    case 'text_re_39':
      return <Text_Re_39_Ui data={data} />;
    case 'text_re_40':
      return <Text_Re_40_Ui data={data} />;
    case 'text_re_41':
      return <Text_Re_41_Ui data={data} />;
    case 'text_re_42':
      return <Text_Re_42_Ui data={data} />;
    case 'text_re_43':
      return <Text_Re_43_Ui data={data} />;
    case 'text_re_44':
      return <Text_Re_44_Ui data={data} />;
    case 'text_re_45':
      return <Text_Re_45_Ui data={data} />;
    case 'text_re_46':
      return <Text_Re_46_Ui data={data} />;
    case 'text_re_47':
      return <Text_Re_47_Ui data={data} />;
    case 'text_re_48':
      return <Text_Re_48_Ui data={data} />;
    case 'text_re_49':
      return <Text_Re_49_Ui data={data} />;
    case 'text_re_50':
      return <Text_Re_50_Ui data={data} />;
    case 'text_re_51':
      return <Text_Re_51_Ui data={data} />;
    case 'text_re_52':
      return <Text_Re_52_Ui data={data} />;
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
    //  默认输出
    default:
      return '';
  }
};
