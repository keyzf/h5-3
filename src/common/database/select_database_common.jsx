/**
 * 显示可选组件列表
 */
import React from "react";
import {
  $$eight_text, $$eleven_text, $$fifteen_text,
  $$five_text,
  $$four_text, $$fourteen_text,
  $$horizontal_text, $$nine_text,
  $$one_text,
  $$seven_text, $$seventeen_text,
  $$six_text, $$sixteen_text, $$ten_text, $$thirteen_text,
  $$three_text, $$twelve_text,
  $$two_text,
  $$vertical_text
} from "../../ui/visual/database/text_database";
import {
  HorizontalTextTemplate,
  VerticalTextTemplate
} from "../../ui/visual/template/text";
import { one_html_text, OneTextUi } from "../../ui/text/one_ui";
import { two_html_text, TwoTextUi } from "../../ui/text/two_ui";
import { three_html_text, ThreeTextUi } from "../../ui/text/three_ui";
import { four_html_text, FourTextUi } from "../../ui/text/four_ui";
import { five_html_text, FiveTextUi } from "../../ui/text/five_ui";
import { six_html_text, SixTextUi } from "../../ui/text/six_ui";
import { seven_html_text, SevenTextUi } from "../../ui/text/seven_ui";
import {
  $$carousel_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$single_img_database,
  $$slider_img_database
} from "../../ui/visual/database/img_database";
import {
  CarouselImgTemplate,
  GridImgTemplate,
  ListImgTemplate,
  SingleImgTemplate,
  SliderImgTemplate
} from "../../ui/visual/template/img";
import { MusicTemplate } from "../../ui/visual/template/music";
import { $$music_database } from "../../ui/visual/database/music_database";
import { $$video_database } from "../../ui/visual/database/video_database";
import { VideoTemplate } from "../../ui/visual/template/video";
import {
  $$grid_mall_database,
  $$list_mall_database
} from "../../ui/visual/database/mall_database";
import {
  GridMallTemplate,
  ListMallTemplate
} from "../../ui/visual/template/mall";
import { eight_html_text, EightTextUi } from "../../ui/text/eight_ui";
import { nine_html_text, NineTextUi } from "../../ui/text/nine_ui";
import { ten_html_text, TenTextUi } from "../../ui/text/ten_ui";
import { eleven_html_text, ElevenTextUi } from "../../ui/text/eleven_ui";
import { twelve_html_text, TwelveTextUi } from "../../ui/text/twelve_ui";
import { thirteen_html_text, ThirteenTextUi } from "../../ui/text/thirteen_ui";
import { fourteen_html_text, FourTeenTextUi } from "../../ui/text/fourteen_ui";
import { fifteen_html_text, FifteenTextUi } from "../../ui/text/fifteen_ui";
import { sixteen_html_text, SixTeenTextUi } from "../../ui/text/sixteen_ui";
import { seventeen_html_text, SevenTeenTextUi } from "../../ui/text/seventeen_ui";

/**
 * text
 * @type {*[]}
 */
const template_text_data = [
  { template: <HorizontalTextTemplate/>, data: $$horizontal_text },
  { template: <VerticalTextTemplate/>, data: $$vertical_text },
  { template: "", data: "dividing-line" },
  { template: <OneTextUi html={one_html_text}/>, data: $$one_text },
  { template: <TwoTextUi html={two_html_text}/>, data: $$two_text },
  { template: <ThreeTextUi html={three_html_text}/>, data: $$three_text },
  { template: <FourTextUi html={four_html_text}/>, data: $$four_text },
  { template: <FiveTextUi html={five_html_text}/>, data: $$five_text },
  { template: <SixTextUi html={six_html_text}/>, data: $$six_text },
  { template: <SevenTextUi html={seven_html_text}/>, data: $$seven_text },
  { template: <EightTextUi html={eight_html_text}/>, data: $$eight_text },
  { template: <NineTextUi html={nine_html_text}/>, data: $$nine_text },
  { template: <TenTextUi html={ten_html_text}/>, data: $$ten_text },
  { template: <ElevenTextUi html={eleven_html_text}/>, data: $$eleven_text },
  { template: <TwelveTextUi html={twelve_html_text}/>, data: $$twelve_text },
  { template: <ThirteenTextUi html={thirteen_html_text}/>, data: $$thirteen_text },
  { template: <FourTeenTextUi html={fourteen_html_text}/>, data: $$fourteen_text },
  { template: <FifteenTextUi html={fifteen_html_text}/>, data: $$fifteen_text },
  { template: <SixTeenTextUi html={sixteen_html_text}/>, data: $$sixteen_text },
  { template: <SevenTeenTextUi html={seventeen_html_text}/>, data: $$seventeen_text }
];

const template_img_data = [
  { template: <SingleImgTemplate/>, data: $$single_img_database },
  { template: <GridImgTemplate/>, data: $$grid_img_database },
  { template: <ListImgTemplate/>, data: $$list_img_database },
  { template: <SliderImgTemplate/>, data: $$slider_img_database },
  { template: <CarouselImgTemplate/>, data: $$carousel_img_database },
  { template: "", data: "dividing-line" }
];

const template_music_data = [
  { template: <MusicTemplate/>, data: $$music_database("music") },
  { template: "", data: "dividing-line" }
];

const template_video_data = [
  { template: <VideoTemplate/>, data: $$video_database("video") },
  { template: "", data: "dividing-line" }
];

const template_mall_data = [
  { template: <GridMallTemplate/>, data: $$grid_mall_database },
  { template: <ListMallTemplate/>, data: $$list_mall_database },
  { template: "", data: "dividing-line" }
];

export {
  template_text_data,
  template_img_data,
  template_music_data,
  template_video_data,
  template_mall_data
};
