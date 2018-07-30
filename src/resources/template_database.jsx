import React from 'react';
import {
  $$eight_text,
  $$eighteen_text,
  $$eleven_text,
  $$fifteen_text,
  $$five_text,
  $$four_text,
  $$fourteen_text,
  $$horizontal_text,
  $$nine_text,
  $$nineteen_text,
  $$one_text,
  $$seven_text,
  $$seventeen_text,
  $$six_text,
  $$sixteen_text,
  $$ten_text,
  $$thirteen_text,
  $$three_text,
  $$twelve_text,
  $$twenty_five_text,
  $$twenty_four_text,
  $$twenty_one_text,
  $$twenty_seven_text,
  $$twenty_six_text,
  $$twenty_text,
  $$twenty_three_text,
  $$twenty_two_text,
  $$two_text,
  $$vertical_text,
} from '../database/text.db';
import {
  HorizontalTextTemplate,
  VerticalTextTemplate,
} from './text/template/_template_text';
import { one_html_text, OneTextUi } from './text/recommend/one_ui';
import { two_html_text, TwoTextUi } from './text/recommend/two_ui';
import { three_html_text, ThreeTextUi } from './text/recommend/three_ui';
import { four_html_text, FourTextUi } from './text/recommend/four_ui';
import { five_html_text, FiveTextUi } from './text/recommend/five_ui';
import { six_html_text, SixTextUi } from './text/recommend/six_ui';
import { seven_html_text, SevenTextUi } from './text/recommend/seven_ui';
import {
  $$carousel_img_database,
  $$five_img_database,
  $$four_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$one_img_database,
  $$single_img_database,
  $$slider_img_database,
  $$three_img_database,
  $$two_img_database,
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
  $$seven_mall_database,
  $$six_mall_database,
  $$three_mall_database,
  $$two_mall_database,
} from '../database/mall.db';
import {
  GridMallTemplate,
  ListMallTemplate,
} from './mall/template/mall_template';
import { eight_html_text, EightTextUi } from './text/recommend/eight_ui';
import { nine_html_text, NineTextUi } from './text/recommend/nine_ui';
import { ten_html_text, TenTextUi } from './text/recommend/ten_ui';
import { eleven_html_text, ElevenTextUi } from './text/recommend/eleven_ui';
import { twelve_html_text, TwelveTextUi } from './text/recommend/twelve_ui';
import {
  thirteen_html_text,
  ThirteenTextUi,
} from './text/recommend/thirteen_ui';
import {
  fourteen_html_text,
  FourTeenTextUi,
} from './text/recommend/fourteen_ui';
import { fifteen_html_text, FifteenTextUi } from './text/recommend/fifteen_ui';
import { sixteen_html_text, SixTeenTextUi } from './text/recommend/sixteen_ui';
import {
  seventeen_html_text,
  SevenTeenTextUi,
} from './text/recommend/seventeen_ui';
import { ButtonTemplate } from './button/template/button';
import {
  $$button_database,
  $$four_button_database,
  $$one_button_database,
  $$three_button_database,
  $$two_button_database,
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
import { OneImgUi } from './img/recommend/one_img_ui';
import { OneMallUi } from './mall/recommend/one_mall_ui';
import { OneButtonUi } from './button/recommend/one_button_ui';
import { TwoImgUi } from './img/recommend/two_img_ui';
import FormUi from './form/recommend/form_ui_render';
import { EighteenTextUi } from './text/recommend/eighteen_ui';
import { ThreeImgUi } from './img/recommend/three_img_ui';
import {
  nineteen_html_text,
  NineTeenTextUi,
} from './text/recommend/nineteen_ui';
import { twenty_html_text, TwentyTextUi } from './text/recommend/twenty_ui';
import { FourImgUi } from './img/recommend/four_img_ui';
import {
  twenty_one_html_text,
  TwentyOneTextUi,
} from './text/recommend/twenty_one_ui';
import { FiveImgUi } from './img/recommend/five_img_ui';
import {
  twenty_two_html_text,
  TwentyTwoTextUi,
} from './text/recommend/twenty_two_ui';
import { TwoMallUi } from './mall/recommend/two_mall_ui';
import {
  twenty_three_html_text,
  TwentyThreeTextUi,
} from './text/recommend/twenty_three_ui';
import { ThreeMallUi } from './mall/recommend/three_mall_ui';
import { FourMallUi } from './mall/recommend/four_mall_ui';
import {
  twenty_four_html_text,
  TwentyFourTextUi,
} from './text/recommend/twenty_four_ui';
import { FiveMallUi } from './mall/recommend/five_mall_ui';
import { SixMallUi } from './mall/recommend/six_mall_ui';
import { SevenMallUi } from './mall/recommend/seven_mall_ui';
import { TwentyFiveTextUi } from './text/recommend/twenty_five_ui';
import { TwentySixTextUi } from './text/recommend/twenty_six_ui';
import { TwentySevenTextUi } from './text/recommend/twenty_seven_ui';
import { TwoButtonUi } from './button/recommend/two_button_ui';
import { ThreeButtonUi } from './button/recommend/three_button_ui';
import { FourButtonUi } from './button/recommend/four_button_ui';

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
    template: <TwentySixTextUi data={$$twenty_six_text(Math.random())} />,
    data: $$twenty_six_text,
  },
  {
    template: <TwentySevenTextUi data={$$twenty_seven_text(Math.random())} />,
    data: $$twenty_seven_text,
  },
  { template: <OneTextUi html={one_html_text} />, data: $$one_text },
  { template: <TwoTextUi html={two_html_text} />, data: $$two_text },
  { template: <ThreeTextUi html={three_html_text} />, data: $$three_text },
  { template: <FourTextUi html={four_html_text} />, data: $$four_text },
  { template: <FiveTextUi html={five_html_text} />, data: $$five_text },
  { template: <SixTextUi html={six_html_text} />, data: $$six_text },
  { template: <SevenTextUi html={seven_html_text} />, data: $$seven_text },
  { template: <EightTextUi html={eight_html_text} />, data: $$eight_text },
  { template: <NineTextUi html={nine_html_text} />, data: $$nine_text },
  { template: <TenTextUi html={ten_html_text} />, data: $$ten_text },
  { template: <ElevenTextUi html={eleven_html_text} />, data: $$eleven_text },
  { template: <TwelveTextUi html={twelve_html_text} />, data: $$twelve_text },
  {
    template: <ThirteenTextUi html={thirteen_html_text} />,
    data: $$thirteen_text,
  },
  {
    template: <FourTeenTextUi html={fourteen_html_text} />,
    data: $$fourteen_text,
  },
  {
    template: <FifteenTextUi html={fifteen_html_text} />,
    data: $$fifteen_text,
  },
  {
    template: <SixTeenTextUi html={sixteen_html_text} />,
    data: $$sixteen_text,
  },
  {
    template: <SevenTeenTextUi html={seventeen_html_text} />,
    data: $$seventeen_text,
  },
  {
    template: <EighteenTextUi html={eight_html_text} />,
    data: $$eighteen_text,
  },
  {
    template: <NineTeenTextUi html={nineteen_html_text} />,
    data: $$nineteen_text,
  },
  { template: <TwentyTextUi html={twenty_html_text} />, data: $$twenty_text },
  {
    template: <TwentyOneTextUi html={twenty_one_html_text} />,
    data: $$twenty_one_text,
  },
  {
    template: <TwentyTwoTextUi html={twenty_two_html_text} />,
    data: $$twenty_two_text,
  },
  {
    template: <TwentyThreeTextUi html={twenty_three_html_text} />,
    data: $$twenty_three_text,
  },
  {
    template: <TwentyFourTextUi html={twenty_four_html_text} />,
    data: $$twenty_four_text,
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
  {
    template: <OneImgUi data={$$one_img_database} />,
    data: $$one_img_database,
  },
  {
    template: <TwoImgUi data={$$two_img_database} />,
    data: $$two_img_database,
  },
  {
    template: <ThreeImgUi data={$$three_img_database} />,
    data: $$three_img_database,
  },
  {
    template: <FourImgUi data={$$four_img_database} />,
    data: $$four_img_database,
  },
  {
    template: <FiveImgUi data={$$five_img_database} />,
    data: $$five_img_database,
  },
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
  {
    template: <SevenMallUi data={$$seven_mall_database} />,
    data: $$seven_mall_database,
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
    template: <OneButtonUi data={$$one_button_database} />,
    data: $$one_button_database,
  },
  {
    template: <TwoButtonUi data={$$two_button_database} />,
    data: $$two_button_database,
  },
  {
    template: <ThreeButtonUi data={$$three_button_database} />,
    data: $$three_button_database,
  },
  {
    template: <FourButtonUi data={$$four_button_database} />,
    data: $$four_button_database,
  },
];
/**
 * form
 * @type {*[]}
 */
const template_form_data = [
  { template: <FormTemplate />, data: $$form_database },
  { template: '', data: 'dividing-line' },
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
  template_mall_data,
  template_button_data,
  template_form_data,
};
