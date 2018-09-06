import React from 'react';
import { Img1UI } from './recommend/img_re_1';
import {
  CarouselImgTemplate,
  SingleImgTemplate,
} from './template/img_template';
import {
  $$carousel_img_database,
  $$img_re_1,
  $$single_img_database,
} from './img.db';

export const imgData = [
  { template: <SingleImgTemplate />, data: $$single_img_database },
  { template: <CarouselImgTemplate />, data: $$carousel_img_database },
  { template: '', data: 'dividing-line' },
  { template: <Img1UI data={$$img_re_1} />, data: $$img_re_1 },
];
