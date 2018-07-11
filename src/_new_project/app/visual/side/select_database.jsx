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
  $$twenty_text,
  $$two_text,
  $$vertical_text,
} from '../../../../_new_ui/text/text_database';
import {
  HorizontalTextTemplate,
  VerticalTextTemplate,
} from '../../../../_new_ui/text/template/_template_text';
import { one_html_text, OneTextUi } from '../../../../_new_ui/text/recommend/one_ui';
import { two_html_text, TwoTextUi } from '../../../../_new_ui/text/recommend/two_ui';
import {
  three_html_text,
  ThreeTextUi,
} from '../../../../_new_ui/text/recommend/three_ui';
import { four_html_text, FourTextUi } from '../../../../_new_ui/text/recommend/four_ui';
import { five_html_text, FiveTextUi } from '../../../../_new_ui/text/recommend/five_ui';
import { six_html_text, SixTextUi } from '../../../../_new_ui/text/recommend/six_ui';
import {
  seven_html_text,
  SevenTextUi,
} from '../../../../_new_ui/text/recommend/seven_ui';
import {
  $$carousel_img_database,
  $$four_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$one_img_database,
  $$single_img_database,
  $$slider_img_database,
  $$three_img_database,
  $$two_img_database,
} from '../../../../_new_ui/img/img_database';
import {
  CarouselImgTemplate,
  GridImgTemplate,
  ListImgTemplate,
  SingleImgTemplate,
  SliderImgTemplate,
} from '../../../../_new_ui/img/template/img_template';
import { MusicTemplate } from '../../../../_new_ui/music/template/music_template';
import { $$music_database } from '../../../../_new_ui/music/music_database';
import { $$video_database } from '../../../../_new_ui/video/video_database';
import { VideoTemplate } from '../../../../_new_ui/video/template/video_template';
import {
  $$grid_mall_database,
  $$list_mall_database,
  $$one_mall_database,
} from '../../../../_new_ui/mall/mall_database';
import {
  GridMallTemplate,
  ListMallTemplate,
} from '../../../../_new_ui/mall/template/mall_template';
import {
  eight_html_text,
  EightTextUi,
} from '../../../../_new_ui/text/recommend/eight_ui';
import { nine_html_text, NineTextUi } from '../../../../_new_ui/text/recommend/nine_ui';
import { ten_html_text, TenTextUi } from '../../../../_new_ui/text/recommend/ten_ui';
import {
  eleven_html_text,
  ElevenTextUi,
} from '../../../../_new_ui/text/recommend/eleven_ui';
import {
  twelve_html_text,
  TwelveTextUi,
} from '../../../../_new_ui/text/recommend/twelve_ui';
import {
  thirteen_html_text,
  ThirteenTextUi,
} from '../../../../_new_ui/text/recommend/thirteen_ui';
import {
  fourteen_html_text,
  FourTeenTextUi,
} from '../../../../_new_ui/text/recommend/fourteen_ui';
import {
  fifteen_html_text,
  FifteenTextUi,
} from '../../../../_new_ui/text/recommend/fifteen_ui';
import {
  sixteen_html_text,
  SixTeenTextUi,
} from '../../../../_new_ui/text/recommend/sixteen_ui';
import {
  seventeen_html_text,
  SevenTeenTextUi,
} from '../../../../_new_ui/text/recommend/seventeen_ui';
import { ButtonTemplate } from '../../../../_new_ui/button/template/button';
import {
  $$button_database,
  $$one_button_database,
} from '../../../../_new_ui/button/button_database';
import { FormTemplate } from '../../../../_new_ui/form/template/form_template';
import {
  $$form_database,
  $$one_form_database,
} from '../../../../_new_ui/form/form_database';
import { OneImgUi } from '../../../../_new_ui/img/recommend/one_img_ui';
import MusicListUI from '../../../../_new_ui/music/recommonnd/music_list_ui';
import VideoListUI from '../../../../_new_ui/video/recommonnd/video_list_ui';
import { OneMallUi } from '../../../../_new_ui/mall/recommend/one_mall_ui';
import { OneButtonUi } from '../../../../_new_ui/button/recommend/one_button_ui';
import { TwoImgUi } from '../../../../_new_ui/img/recommend/two_img_ui';
import { FormUi } from '../../../../_new_ui/form/form_ui_render';
import { EighteenTextUi } from '../../../../_new_ui/text/recommend/eighteen_ui';
import { ThreeImgUi } from '../../../../_new_ui/img/recommend/three_img_ui';
import {
  nineteen_html_text,
  NineTeenTextUi,
} from '../../../../_new_ui/text/recommend/nineteen_ui';
import {
  twenty_html_text,
  TwentyTextUi,
} from '../../../../_new_ui/text/recommend/twenty_ui';
import { FourImgUi } from '../../../../_new_ui/img/recommend/four_img_ui';

const template_text_data = [
  { template: <HorizontalTextTemplate />, data: $$horizontal_text },
  { template: <VerticalTextTemplate />, data: $$vertical_text },
  { template: '', data: 'dividing-line' },
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
];
/**
 * music
 * @type {*[]}
 */
const template_music_data = [
  {
    template: <MusicTemplate />,
    data: $$music_database(
      'music',
      'https://e7wei-img.oss-cn-beijing.aliyuncs.com/music.mp3'
    ),
  },
  { template: '', data: 'dividing-line' },
  { template: <MusicListUI />, data: 'music_list_ui' },
];
/**
 * video
 * @type {*[]}
 */
const template_video_data = [
  {
    template: <VideoTemplate />,
    data: $$video_database(
      'video',
      'https://e7wei-img.oss-cn-beijing.aliyuncs.com/movie.mp4'
    ),
  },
  { template: '', data: 'dividing-line' },
  { template: <VideoListUI />, data: 'video_list_ui' },
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
];
/**
 * form
 * @type {*[]}
 */
const template_form_data = [
  { template: <FormTemplate />, data: $$form_database },
  { template: '', data: 'dividing-line' },
  {
    template: <FormUi data={$$one_form_database} />,
    data: $$one_form_database,
  },
];
export {
  template_text_data,
  template_img_data,
  template_music_data,
  template_video_data,
  template_mall_data,
  template_button_data,
  template_form_data,
};
