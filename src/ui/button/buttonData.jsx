import { ButtonTemplate } from './template/button';
import {
  $$btn_re_1,
  $$btn_re_2,
  $$btn_re_3,
  $$btn_re_4,
  $$btn_re_5,
  $$btn_re_6,
  $$btn_re_7,
  $$button_database,
} from './button.db';
import { Btn1Ui } from './recommend/btn_re_1';
import { Btn2Ui } from './recommend/btn_re_2';
import { Btn3Ui } from './recommend/btn_re_3';
import { Btn4Ui } from './recommend/btn_re_4';
import { Btn5Ui } from './recommend/btn_re_5';
import { Btn6Ui } from './recommend/btn_re_6';
import { Btn7Ui } from './recommend/btn_re_7';
import React from 'react';

export const buttonData = [
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
