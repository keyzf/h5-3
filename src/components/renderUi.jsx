import React from 'react';
import { VTextUi } from '../ui/text/core/vertical_ui';
import { HTextUi } from '../ui/text/core/horizontal_ui';
import { UpImgUi } from '../ui/img/core/img_component';
import { CarouselImgUI } from '../ui/img/core/carousel_component';
import { VideoUi } from '../ui/video/core/video_ui';
import { ButtonUi } from '../ui/button/core/button';
import { FormUi } from '../routes/components';

import { Btn1Ui } from '../ui/button/recommend/btn_re_1';
import { Btn2Ui } from '../ui/button/recommend/btn_re_2';
import { Btn3Ui } from '../ui/button/recommend/btn_re_3';
import { Btn4Ui } from '../ui/button/recommend/btn_re_4';
import { Btn5Ui } from '../ui/button/recommend/btn_re_5';
import { Btn6Ui } from '../ui/button/recommend/btn_re_6';
import { Btn7Ui } from '../ui/button/recommend/btn_re_7';
import { Img1UI } from '../ui/img/recommend/img_re_1';

import { Text1 } from '../ui/text/recommend/Text1';
import { Text2 } from '../ui/text/recommend/Text2';
import { Text3 } from '../ui/text/recommend/Text3';
import { Text4 } from '../ui/text/recommend/Text4';
import { Text5 } from '../ui/text/recommend/Text5';
import { Text6 } from '../ui/text/recommend/Text6';
import { Text7 } from '../ui/text/recommend/Text7';
import { Text8 } from '../ui/text/recommend/Text8';
import { Text9 } from '../ui/text/recommend/Text9';
import { Text10 } from '../ui/text/recommend/Text10';
import { Text11 } from '../ui/text/recommend/Text11';
import { Text12 } from '../ui/text/recommend/Text12';
import { Text13 } from '../ui/text/recommend/Text13';
import { Text14 } from '../ui/text/recommend/Text14';
import { Text15 } from '../ui/text/recommend/Text15';
import { Tex16 } from '../ui/text/recommend/Text16';
import { Text17 } from '../ui/text/recommend/Text17';
import { Text18 } from '../ui/text/recommend/Text18';
import { Text19 } from '../ui/text/recommend/Text19';
import { Text20 } from '../ui/text/recommend/Text20';
import { Text21 } from '../ui/text/recommend/Text21';
import { Text22 } from '../ui/text/recommend/Text22';
import { Text23 } from '../ui/text/recommend/Text23';
import { Text24 } from '../ui/text/recommend/Text24';
import { Text25 } from '../ui/text/recommend/Text25';
import { Text26 } from '../ui/text/recommend/Text26';
import { Text27 } from '../ui/text/recommend/Text27';
import { Text28 } from '../ui/text/recommend/Text28';
import { Text29 } from '../ui/text/recommend/Text29';
import { Text30 } from '../ui/text/recommend/Text30';
import { Text31 } from '../ui/text/recommend/Text31';
import { Text32 } from '../ui/text/recommend/Text32';
import { Text33 } from '../ui/text/recommend/Text33';
import { Text34 } from '../ui/text/recommend/Text34';
import { Text35 } from '../ui/text/recommend/Text35';
import { Text36 } from '../ui/text/recommend/Text36';
import { Text37 } from '../ui/text/recommend/Text37';
import { Text38 } from '../ui/text/recommend/Text38';
import { Text39 } from '../ui/text/recommend/Text39';
import { Tex40 } from '../ui/text/recommend/Text40';
import { Tex41 } from '../ui/text/recommend/Text41';
import { Text42 } from '../ui/text/recommend/Text42';
import { Text43 } from '../ui/text/recommend/Text43';
import { Text44 } from '../ui/text/recommend/Text44';
import { Text45 } from '../ui/text/recommend/Text45';
import { Text46 } from '../ui/text/recommend/Text46';
import { Text47 } from '../ui/text/recommend/Text47';
import { Text48 } from '../ui/text/recommend/Text48';
import { Text49 } from '../ui/text/recommend/Text49';
import { Text50 } from '../ui/text/recommend/Text50';
import { Text51 } from '../ui/text/recommend/Text51';
import { Text52 } from '../ui/text/recommend/Text52';
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
    case 'text1':
      return <Text1 data={data} />;
    case 'text2':
      return <Text2 data={data} />;
    case 'text3':
      return <Text3 data={data} />;
    case 'text4':
      return <Text4 data={data} />;
    case 'text5':
      return <Text5 data={data} />;
    case 'text6':
      return <Text6 data={data} />;
    case 'text7':
      return <Text7 data={data} />;
    case 'text8':
      return <Text8 data={data} />;
    case 'text9':
      return <Text9 data={data} />;
    case 'text10':
      return <Text10 data={data} />;
    case 'text_re_11':
      return <Text11 data={data} />;
    case 'text12':
      return <Text12 data={data} />;
    case 'text13':
      return <Text13 data={data} />;
    case 'text14':
      return <Text14 data={data} />;
    case 'text15':
      return <Text15 data={data} />;
    case 'text16':
      return <Tex16 data={data} />;
    case 'text17':
      return <Text17 data={data} />;
    case 'text18':
      return <Text18 data={data} />;
    case 'text19':
      return <Text19 data={data} />;
    case 'text20':
      return <Text20 data={data} />;
    case 'text21':
      return <Text21 data={data} />;
    case 'text22':
      return <Text22 data={data} />;
    case 'text23':
      return <Text23 data={data} />;
    case 'text24':
      return <Text24 data={data} />;
    case 'text_re_25':
      return <Text25 data={data} />;
    case 'text_re_26':
      return <Text26 data={data} />;
    case 'text_re_27':
      return <Text27 data={data} />;
    case 'text34':
      return <Text34 data={data} />;
    case 'text35':
      return <Text35 data={data} />;
    case 'text36':
      return <Text36 data={data} />;
    case 'text_re_37':
      return <Text37 data={data} />;
    case 'text38':
      return <Text38 data={data} />;
    case 'text39':
      return <Text39 data={data} />;
    case 'text40':
      return <Tex40 data={data} />;
    case 'text41':
      return <Tex41 data={data} />;
    case 'text42':
      return <Text42 data={data} />;
    case 'text43':
      return <Text43 data={data} />;
    case 'text44':
      return <Text44 data={data} />;
    case 'text45':
      return <Text45 data={data} />;
    case 'text46':
      return <Text46 data={data} />;
    case 'text47':
      return <Text47 data={data} />;
    case 'text48':
      return <Text48 data={data} />;
    case 'text49':
      return <Text49 data={data} />;
    case 'text50':
      return <Text50 data={data} />;
    case 'text51':
      return <Text51 data={data} />;
    case 'text52':
      return <Text52 data={data} />;
    case 'twenty_five_text':
      return <Text25 data={data} />;
    case 'twenty_six_text':
      return <Text26 data={data} />;
    case 'twenty_seven_text':
      return <Text27 data={data} />;
    case 'twenty_eight_text':
      return <Text28 data={data} />;
    case 'twenty_nine_text':
      return <Text29 data={data} />;
    case 'thirty_text':
      return <Text30 data={data} />;
    case 'thirty_one_text':
      return <Text31 data={data} />;
    case 'thirty_two_text':
      return <Text32 data={data} />;
    case 'thirty_three_text':
      return <Text33 data={data} />;
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
