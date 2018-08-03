import React from 'react';
import {
  $$horizontal_text,
  $$text_re_1,
  $$text_re_2,
  $$thirty_one_text,
  $$thirty_text,
  $$thirty_three_text,
  $$thirty_two_text,
  $$twenty_eight_text,
  $$twenty_five_text,
  $$twenty_nine_text,
  $$twenty_seven_text,
  $$twenty_six_text,
  $$vertical_text,
} from '../database/text.db';
import {
  HorizontalTextTemplate,
  VerticalTextTemplate,
} from './text/template/_template_text';
import {
  $$carousel_img_database,
  $$grid_img_database,
  $$img_re_1,
  $$img_re_2,
  $$img_re_3,
  $$img_re_4,
  $$img_re_5,
  $$img_re_6,
  $$img_re_7,
  $$list_img_database,
  $$single_img_database,
  $$slider_img_database,
} from '../database/img.db';
import {
  CarouselImgTemplate,
  GridImgTemplate,
  ListImgTemplate,
  SingleImgTemplate,
  SliderImgTemplate,
} from './img/template/img_template';
import {
  $$five_mall_database,
  $$four_mall_database,
  $$grid_mall_database,
  $$list_mall_database,
  $$one_mall_database,
  $$six_mall_database,
  $$three_mall_database,
  $$two_mall_database,
} from '../database/mall.db';
import {
  GridMallTemplate,
  ListMallTemplate,
} from './mall/template/mall_template';
import { ButtonTemplate } from './button/template/button';
import {
  $$btn_re_1,
  $$btn_re_2,
  $$btn_re_3,
  $$btn_re_4,
  $$btn_re_5,
  $$btn_re_6,
  $$btn_re_7,
  $$button_database,
} from '../database/button.db';
import { FormTemplate } from './form/template/form_template';
import {
  $$eight_form_database,
  $$five_form_database,
  $$form_database,
  $$four_form_database,
  $$one_form_database,
  $$seven_form_database,
  $$six_form_database,
  $$three_form_database,
  $$two_form_database,
} from '../database/form.db';
import { OneMallUi } from './mall/recommend/one_mall_ui';
import FormUi from './form/recommend/form_ui_render';
import { TwoMallUi } from './mall/recommend/two_mall_ui';
import { ThreeMallUi } from './mall/recommend/three_mall_ui';
import { FourMallUi } from './mall/recommend/four_mall_ui';
import { FiveMallUi } from './mall/recommend/five_mall_ui';
import { SixMallUi } from './mall/recommend/six_mall_ui';
import { TwentyFiveTextUi } from './text/recommend/twenty_five_ui';
import { TwentySixTextUi } from './text/recommend/twenty_six_ui';
import { TwentySevenTextUi } from './text/recommend/twenty_seven_ui';
import { TwentyEightTextUi } from './text/recommend/twenty_eight_ui';
import { TwentyNineTextUi } from './text/recommend/twenty_nine_ui';
import { ThirtyTextUi } from './text/recommend/thirty_ui';
import { ThirtyOneTextUi } from './text/recommend/thirty_one_ui';
import { ThirtyTwoTextUi } from './text/recommend/thirty_two_ui';
import { ThirtyThreeTextUi } from './text/recommend/thirty_three_ui';
import { Text_Re_1_Ui } from './text/recommend/text_re_1';
import { Text_Re_2_Ui } from './text/recommend/text_re_2';
import { Btn1Ui } from './button/recommend/btn_re_1';
import { Btn2Ui } from './button/recommend/btn_re_2';
import { Btn3Ui } from './button/recommend/btn_re_3';
import { Btn4Ui } from './button/recommend/btn_re_4';
import { Btn5Ui } from './button/recommend/btn_re_5';
import { Btn6Ui } from './button/recommend/btn_re_6';
import { Btn7Ui } from './button/recommend/btn_re_7';
import { Img1UI } from './img/recommend/img_re_1';
import { Img2UI } from './img/recommend/img_re_2';
import { Img3UI } from './img/recommend/img_re_3';
import { Img4UI } from './img/recommend/img_re_4';
import { Img5UI } from './img/recommend/img_re_5';
import { Img6UI } from './img/recommend/img_re_6';
import { Img7UI } from './img/recommend/img_re_7';

/**
 * text
 * @type {*[]}
 */
const template_text_data = [
  { template: <HorizontalTextTemplate />, data: $$horizontal_text },
  { template: <VerticalTextTemplate />, data: $$vertical_text },
  { template: '', data: 'dividing-line' },
  {
    template: <Text_Re_1_Ui data={$$text_re_1(Math.random())} />,
    data: $$text_re_1,
  },
  {
    template: <Text_Re_2_Ui data={$$text_re_2(Math.random())} />,
    data: $$text_re_2,
  },
  {
    template: <TwentyFiveTextUi data={$$twenty_five_text(Math.random())} />,
    data: $$twenty_five_text,
  },
  {
    template: <TwentySevenTextUi data={$$twenty_seven_text(Math.random())} />,
    data: $$twenty_seven_text,
  },
  {
    template: <TwentyEightTextUi data={$$twenty_eight_text(Math.random())} />,
    data: $$twenty_eight_text,
  },
  {
    template: <TwentyNineTextUi data={$$twenty_nine_text(Math.random())} />,
    data: $$twenty_nine_text,
  },
  {
    template: <ThirtyTextUi data={$$thirty_text(Math.random())} />,
    data: $$thirty_text,
  },
  {
    template: <ThirtyOneTextUi data={$$thirty_one_text(Math.random())} />,
    data: $$thirty_one_text,
  },
  {
    template: <ThirtyTwoTextUi data={$$thirty_two_text(Math.random())} />,
    data: $$thirty_two_text,
  },
  {
    template: <ThirtyThreeTextUi data={$$thirty_three_text(Math.random())} />,
    data: $$thirty_three_text,
  },
  {
    template: <TwentySixTextUi data={$$twenty_six_text(Math.random())} />,
    data: $$twenty_six_text,
  },
];
/**
 * button
 * @type {*[]}
 */
const template_button_data = [
  { template: <ButtonTemplate />, data: $$button_database },
  { template: '', data: 'dividing-line' },
  {
    template: <Btn1Ui data={$$btn_re_1} />,
    data: $$btn_re_1,
  },
  {
    template: <Btn2Ui data={$$btn_re_2} />,
    data: $$btn_re_2,
  },
  {
    template: <Btn3Ui data={$$btn_re_3} />,
    data: $$btn_re_3,
  },
  {
    template: <Btn4Ui data={$$btn_re_4} />,
    data: $$btn_re_4,
  },
  {
    template: <Btn5Ui data={$$btn_re_5} />,
    data: $$btn_re_5,
  },
  {
    template: <Btn6Ui data={$$btn_re_6} />,
    data: $$btn_re_6,
  },
  {
    template: <Btn7Ui data={$$btn_re_7} />,
    data: $$btn_re_7,
  },
];
/**
 * img
 * @type {*[]}
 */
const template_img_data = [
  { template: <SingleImgTemplate />, data: $$single_img_database },
  { template: <GridImgTemplate />, data: $$grid_img_database },
  { template: <ListImgTemplate />, data: $$list_img_database },
  { template: <SliderImgTemplate />, data: $$slider_img_database },
  { template: <CarouselImgTemplate />, data: $$carousel_img_database },
  { template: '', data: 'dividing-line' },
  { template: <Img1UI data={$$img_re_1} />, data: $$img_re_1 },
  { template: <Img2UI data={$$img_re_2} />, data: $$img_re_2 },
  { template: <Img3UI data={$$img_re_3} />, data: $$img_re_3 },
  { template: <Img4UI data={$$img_re_4} />, data: $$img_re_4 },
  { template: <Img5UI data={$$img_re_5} />, data: $$img_re_5 },
  { template: <Img6UI data={$$img_re_6} />, data: $$img_re_6 },
  { template: <Img7UI data={$$img_re_7} />, data: $$img_re_7 },
];
/**
 * mall
 * @type {*[]}
 */
const template_mall_data = [
  { template: <GridMallTemplate />, data: $$grid_mall_database },
  { template: <ListMallTemplate />, data: $$list_mall_database },
  { template: '', data: 'dividing-line' },
  {
    template: <OneMallUi data={$$one_mall_database} />,
    data: $$one_mall_database,
  },
  {
    template: <TwoMallUi data={$$two_mall_database} />,
    data: $$two_mall_database,
  },
  {
    template: <ThreeMallUi data={$$three_mall_database} />,
    data: $$three_mall_database,
  },
  {
    template: <FourMallUi data={$$four_mall_database} />,
    data: $$four_mall_database,
  },
  {
    template: <FiveMallUi data={$$five_mall_database} />,
    data: $$five_mall_database,
  },
  {
    template: <SixMallUi data={$$six_mall_database} />,
    data: $$six_mall_database,
  },
];
/**
 * form
 * @type {*[]}
 */
const template_form_data = [
  // { template: <FormTemplate />, data: $$form_database },
  // { template: '', data: 'dividing-line' },
  // {
  //   template: <FormUi data={$$one_form_database} pointer={true} />,
  //   data: $$one_form_database,
  // },
  {
    template: <FormUi pointer={true} data={$$two_form_database} />,
    data: $$two_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$three_form_database} />,
    data: $$three_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$four_form_database} />,
    data: $$four_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$five_form_database} />,
    data: $$five_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$six_form_database} />,
    data: $$six_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$seven_form_database} />,
    data: $$seven_form_database,
  },
  {
    template: <FormUi pointer={true} data={$$eight_form_database} />,
    data: $$eight_form_database,
  },
];

export {
  template_text_data,
  template_img_data,
  template_mall_data,
  template_button_data,
  template_form_data,
};
