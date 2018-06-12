import React from "react";
import {
  $$five_text,
  $$four_text,
  $$horizontal_text,
  $$one_text,
  $$seven_text,
  $$six_text,
  $$three_text,
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

/**
 * text
 * @type {*[]}
 */
export const template_text_data = [
  { template: <HorizontalTextTemplate/>, data: $$horizontal_text },
  { template: <VerticalTextTemplate/>, data: $$vertical_text },
  { template: "", data: "dividing-line" },
  { template: <OneTextUi html={one_html_text}/>, data: $$one_text },
  { template: <TwoTextUi html={two_html_text}/>, data: $$two_text },
  { template: <ThreeTextUi html={three_html_text}/>, data: $$three_text },
  { template: <FourTextUi html={four_html_text}/>, data: $$four_text },
  { template: <FiveTextUi html={five_html_text}/>, data: $$five_text },
  { template: <SixTextUi html={six_html_text}/>, data: $$six_text },
  { template: <SevenTextUi html={seven_html_text}/>, data: $$seven_text }
];