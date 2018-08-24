import React from 'react';
import {
  $$horizontal_text,
  $$text_re_1,
  $$text_re_10,
  $$text_re_11,
  $$text_re_12,
  $$text_re_13,
  $$text_re_14,
  $$text_re_15,
  $$text_re_16,
  $$text_re_17,
  $$text_re_18,
  $$text_re_19,
  $$text_re_2,
  $$text_re_20,
  $$text_re_21,
  $$text_re_22,
  $$text_re_23,
  $$text_re_24,
  $$text_re_25,
  $$text_re_26,
  $$text_re_27,
  $$text_re_3,
  $$text_re_34,
  $$text_re_35,
  $$text_re_36,
  $$text_re_37,
  $$text_re_38,
  $$text_re_39,
  $$text_re_4,
  $$text_re_40,
  $$text_re_41,
  $$text_re_42,
  $$text_re_43,
  $$text_re_44,
  $$text_re_45,
  $$text_re_46,
  $$text_re_47,
  $$text_re_48,
  $$text_re_49,
  $$text_re_5,
  $$text_re_50,
  $$text_re_51,
  $$text_re_52,
  $$text_re_6,
  $$text_re_7,
  $$text_re_8,
  $$text_re_9,
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
  $$img_re_1,
  $$single_img_database,
} from '../database/img.db';
import {
  CarouselImgTemplate,
  SingleImgTemplate,
} from './img/template/img_template';

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
import {
  $$eight_form_database,
  $$five_form_database,
  $$four_form_database,
  $$one_form_database,
  $$seven_form_database,
  $$six_form_database,
  $$three_form_database,
  $$two_form_database,
} from '../database/form.db';
import { FormUi } from '../routes/web.route';

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
import { Text_Re_3_Ui } from './text/recommend/text_re_3';
import { Text_Re_4_Ui } from './text/recommend/text_re_4';
import { Text_Re_5_Ui } from './text/recommend/text_re_5';
import { Text_Re_6_Ui } from './text/recommend/text_re_6';
import { Text_Re_7_Ui } from './text/recommend/text_re_7';
import { Text_Re_8_Ui } from './text/recommend/text_re_8';
import { Text_Re_9_Ui } from './text/recommend/text_re_9';
import { Text_Re_10_Ui } from './text/recommend/text_re_10';
import { Text_Re_11_Ui } from './text/recommend/text_re_11';
import { Text_Re_12_Ui } from './text/recommend/text_re_12';
import { Text_Re_13_Ui } from './text/recommend/text_re_13';
import { Text_Re_14_Ui } from './text/recommend/text_re_14';
import { Text_Re_15_Ui } from './text/recommend/text_re_15';
import { Text_Re_16_Ui } from './text/recommend/text_re_16';
import { Text_Re_17_Ui } from './text/recommend/text_re_17';
import { Text_Re_18_Ui } from './text/recommend/text_re_18';
import { Text_Re_19_Ui } from './text/recommend/text_re_19';
import { Text_Re_20_Ui } from './text/recommend/text_re_20';
import { Text_Re_21_Ui } from './text/recommend/text_re_21';
import { Text_Re_22_Ui } from './text/recommend/text_re_22';
import { Text_Re_23_Ui } from './text/recommend/text_re_23';
import { Text_Re_24_Ui } from './text/recommend/text_re_24';
import { Text_Re_25_Ui } from './text/recommend/text_re_25';
import { Text_Re_26_Ui } from './text/recommend/text_re_26';
import { Text_Re_27_Ui } from './text/recommend/text_re_27';
import { Text_Re_34_Ui } from './text/recommend/text_re_34';
import { Text_Re_35_Ui } from './text/recommend/text_re_35';
import { Text_Re_36_Ui } from './text/recommend/text_re_36';
import { Text_Re_37_Ui } from './text/recommend/text_re_37';
import { Text_Re_38_Ui } from './text/recommend/text_re_38';
import { Text_Re_39_Ui } from './text/recommend/text_re_39';
import { Text_Re_40_Ui } from './text/recommend/text_re_40';
import { Text_Re_41_Ui } from './text/recommend/text_re_41';
import { Text_Re_42_Ui } from './text/recommend/text_re_42';
import { Text_Re_43_Ui } from './text/recommend/text_re_43';
import { Text_Re_44_Ui } from './text/recommend/text_re_44';
import { Text_Re_45_Ui } from './text/recommend/text_re_45';
import { Text_Re_46_Ui } from './text/recommend/text_re_46';
import { Text_Re_47_Ui } from './text/recommend/text_re_47';
import { Text_Re_48_Ui } from './text/recommend/text_re_48';
import { Text_Re_49_Ui } from './text/recommend/text_re_49';
import { Text_Re_50_Ui } from './text/recommend/text_re_50';
import { Text_Re_51_Ui } from './text/recommend/text_re_51';
import { Text_Re_52_Ui } from './text/recommend/text_re_52';

/**
 * text
 * @type {*[]}
 */
const template_text_data = [
  { template: <HorizontalTextTemplate />, data: $$horizontal_text },
  { template: <VerticalTextTemplate />, data: $$vertical_text },
  { template: '', data: 'dividing-line' },
  {
    template: <TwentyFiveTextUi data={$$twenty_five_text(Math.random())} />,
    data: $$twenty_five_text,
  },
  {
    template: <ThirtyThreeTextUi data={$$thirty_three_text(Math.random())} />,
    data: $$thirty_three_text,
  },
  {
    template: <ThirtyTwoTextUi data={$$thirty_two_text(Math.random())} />,
    data: $$thirty_two_text,
  },
  {
    template: <ThirtyOneTextUi data={$$thirty_one_text(Math.random())} />,
    data: $$thirty_one_text,
  },
  {
    template: <ThirtyTextUi data={$$thirty_text(Math.random())} />,
    data: $$thirty_text,
  },
  {
    template: <TwentyNineTextUi data={$$twenty_nine_text(Math.random())} />,
    data: $$twenty_nine_text,
  },
  {
    template: <TwentyEightTextUi data={$$twenty_eight_text(Math.random())} />,
    data: $$twenty_eight_text,
  },
  {
    template: <TwentySevenTextUi data={$$twenty_seven_text(Math.random())} />,
    data: $$twenty_seven_text,
  },
  {
    template: <Text_Re_5_Ui data={$$text_re_5(Math.random())} />,
    data: $$text_re_5,
  },
  {
    template: <Text_Re_4_Ui data={$$text_re_4(Math.random())} />,
    data: $$text_re_4,
  },
  {
    template: <Text_Re_3_Ui data={$$text_re_3(Math.random())} />,
    data: $$text_re_3,
  },
  {
    template: <Text_Re_2_Ui data={$$text_re_2(Math.random())} />,
    data: $$text_re_2,
  },
  {
    template: <Text_Re_1_Ui data={$$text_re_1(Math.random())} />,
    data: $$text_re_1,
  },
  {
    template: <Text_Re_21_Ui data={$$text_re_21(Math.random())} />,
    data: $$text_re_21,
  },
  {
    template: <Text_Re_20_Ui data={$$text_re_20(Math.random())} />,
    data: $$text_re_20,
  },
  {
    template: <Text_Re_19_Ui data={$$text_re_19(Math.random())} />,
    data: $$text_re_19,
  },
  {
    template: <Text_Re_18_Ui data={$$text_re_18(Math.random())} />,
    data: $$text_re_18,
  },
  {
    template: <Text_Re_17_Ui data={$$text_re_17(Math.random())} />,
    data: $$text_re_17,
  },
  {
    template: <Text_Re_16_Ui data={$$text_re_16(Math.random())} />,
    data: $$text_re_16,
  },
  {
    template: <Text_Re_15_Ui data={$$text_re_15(Math.random())} />,
    data: $$text_re_15,
  },
  {
    template: <Text_Re_14_Ui data={$$text_re_14(Math.random())} />,
    data: $$text_re_14,
  },
  {
    template: <Text_Re_13_Ui data={$$text_re_13(Math.random())} />,
    data: $$text_re_13,
  },
  {
    template: <Text_Re_12_Ui data={$$text_re_12(Math.random())} />,
    data: $$text_re_12,
  },
  {
    template: <Text_Re_11_Ui data={$$text_re_11(Math.random())} />,
    data: $$text_re_11,
  },
  {
    template: <Text_Re_10_Ui data={$$text_re_10(Math.random())} />,
    data: $$text_re_10,
  },
  {
    template: <Text_Re_9_Ui data={$$text_re_9(Math.random())} />,
    data: $$text_re_9,
  },
  {
    template: <Text_Re_8_Ui data={$$text_re_8(Math.random())} />,
    data: $$text_re_8,
  },
  {
    template: <Text_Re_7_Ui data={$$text_re_7(Math.random())} />,
    data: $$text_re_7,
  },
  {
    template: <Text_Re_6_Ui data={$$text_re_6(Math.random())} />,
    data: $$text_re_6,
  },
  {
    template: <Text_Re_22_Ui data={$$text_re_22(Math.random())} />,
    data: $$text_re_22,
  },

  {
    template: <Text_Re_23_Ui data={$$text_re_23(Math.random())} />,
    data: $$text_re_23,
  },
  {
    template: <Text_Re_27_Ui data={$$text_re_27(Math.random())} />,
    data: $$text_re_27,
  },
  {
    template: <Text_Re_26_Ui data={$$text_re_26(Math.random())} />,
    data: $$text_re_26,
  },
  {
    template: <Text_Re_25_Ui data={$$text_re_25(Math.random())} />,
    data: $$text_re_25,
  },
  {
    template: <Text_Re_24_Ui data={$$text_re_24(Math.random())} />,
    data: $$text_re_24,
  },

  {
    template: <Text_Re_52_Ui data={$$text_re_52(Math.random())} />,
    data: $$text_re_52,
  },
  {
    template: <Text_Re_51_Ui data={$$text_re_51(Math.random())} />,
    data: $$text_re_51,
  },
  {
    template: <Text_Re_50_Ui data={$$text_re_50(Math.random())} />,
    data: $$text_re_50,
  },
  {
    template: <Text_Re_49_Ui data={$$text_re_49(Math.random())} />,
    data: $$text_re_49,
  },
  {
    template: <Text_Re_48_Ui data={$$text_re_48(Math.random())} />,
    data: $$text_re_48,
  },
  {
    template: <Text_Re_47_Ui data={$$text_re_47(Math.random())} />,
    data: $$text_re_47,
  },
  {
    template: <Text_Re_46_Ui data={$$text_re_46(Math.random())} />,
    data: $$text_re_46,
  },
  {
    template: <Text_Re_45_Ui data={$$text_re_45(Math.random())} />,
    data: $$text_re_45,
  },
  {
    template: <Text_Re_44_Ui data={$$text_re_44(Math.random())} />,
    data: $$text_re_44,
  },
  {
    template: <Text_Re_43_Ui data={$$text_re_43(Math.random())} />,
    data: $$text_re_43,
  },
  {
    template: <Text_Re_42_Ui data={$$text_re_42(Math.random())} />,
    data: $$text_re_42,
  },
  {
    template: <Text_Re_41_Ui data={$$text_re_41(Math.random())} />,
    data: $$text_re_41,
  },
  {
    template: <Text_Re_40_Ui data={$$text_re_40(Math.random())} />,
    data: $$text_re_40,
  },
  {
    template: <Text_Re_39_Ui data={$$text_re_39(Math.random())} />,
    data: $$text_re_39,
  },
  {
    template: <Text_Re_38_Ui data={$$text_re_38(Math.random())} />,
    data: $$text_re_38,
  },
  {
    template: <Text_Re_37_Ui data={$$text_re_37(Math.random())} />,
    data: $$text_re_37,
  },
  {
    template: <Text_Re_36_Ui data={$$text_re_36(Math.random())} />,
    data: $$text_re_36,
  },
  {
    template: <Text_Re_35_Ui data={$$text_re_35(Math.random())} />,
    data: $$text_re_35,
  },
  {
    template: <Text_Re_34_Ui data={$$text_re_34(Math.random())} />,
    data: $$text_re_34,
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
  { template: <CarouselImgTemplate />, data: $$carousel_img_database },
  { template: '', data: 'dividing-line' },
  { template: <Img1UI data={$$img_re_1} />, data: $$img_re_1 },
];
/**
 * form
 * @type {*[]}
 */
const template_form_data = [
  {
    template: <FormUi data={$$one_form_database} pointer={true} />,
    data: $$one_form_database,
  },
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
  template_button_data,
  template_form_data,
};
