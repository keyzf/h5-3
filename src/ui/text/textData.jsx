import {
  HorizontalTextTemplate,
  VerticalTextTemplate,
} from './template/_template_text';
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
} from './text.db';
import { Text52 } from './recommend/Text52';
import { Text51 } from './recommend/Text51';
import { Text50 } from './recommend/Text50';
import { Text49 } from './recommend/Text49';
import { Text48 } from './recommend/Text48';
import { Text47 } from './recommend/Text47';
import { Text46 } from './recommend/Text46';
import { Text45 } from './recommend/Text45';
import { Text44 } from './recommend/Text44';
import { Text43 } from './recommend/Text43';
import { Text42 } from './recommend/Text42';
import { Tex41 } from './recommend/Text41';
import { Tex40 } from './recommend/Text40';
import { Text39 } from './recommend/Text39';
import { Text38 } from './recommend/Text38';
import { Text37 } from './recommend/Text37';
import { Text36 } from './recommend/Text36';
import { Text35 } from './recommend/Text35';
import { Text34 } from './recommend/Text34';
import { Text33 } from './recommend/Text33';
import { Text32 } from './recommend/Text32';
import { Text31 } from './recommend/Text31';
import { Text30 } from './recommend/Text30';
import { Text29 } from './recommend/Text29';
import { Text28 } from './recommend/Text28';
import { Text27 } from './recommend/Text27';
import { Text26 } from './recommend/Text26';
import { Text25 } from './recommend/Text25';
import { Text24 } from './recommend/Text24';
import { Text23 } from './recommend/Text23';
import { Text22 } from './recommend/Text22';
import { Text21 } from './recommend/Text21';
import { Text20 } from './recommend/Text20';
import { Text19 } from './recommend/Text19';
import { Text18 } from './recommend/Text18';
import { Text17 } from './recommend/Text17';
import { Tex16 } from './recommend/Text16';
import { Text15 } from './recommend/Text15';
import { Text14 } from './recommend/Text14';
import { Text13 } from './recommend/Text13';
import { Text12 } from './recommend/Text12';
import { Text11 } from './recommend/Text11';
import { Text10 } from './recommend/Text10';
import { Text9 } from './recommend/Text9';
import { Text8 } from './recommend/Text8';
import { Text7 } from './recommend/Text7';
import { Text6 } from './recommend/Text6';
import { Text5 } from './recommend/Text5';
import { Text4 } from './recommend/Text4';
import { Text3 } from './recommend/Text3';
import { Text2 } from './recommend/Text2';
import { Text1 } from './recommend/Text1';

import React from 'react';

export const textData = [
  { template: <HorizontalTextTemplate />, data: $$horizontal_text },
  { template: <VerticalTextTemplate />, data: $$vertical_text },
  { template: '', data: 'dividing-line' },
  {
    template: <Text25 data={$$twenty_five_text(Math.random())} />,
    data: $$twenty_five_text,
  },
  {
    template: <Text33 data={$$thirty_three_text(Math.random())} />,
    data: $$thirty_three_text,
  },
  {
    template: <Text32 data={$$thirty_two_text(Math.random())} />,
    data: $$thirty_two_text,
  },
  {
    template: <Text31 data={$$thirty_one_text(Math.random())} />,
    data: $$thirty_one_text,
  },
  {
    template: <Text30 data={$$thirty_text(Math.random())} />,
    data: $$thirty_text,
  },
  {
    template: <Text29 data={$$twenty_nine_text(Math.random())} />,
    data: $$twenty_nine_text,
  },
  {
    template: <Text28 data={$$twenty_eight_text(Math.random())} />,
    data: $$twenty_eight_text,
  },
  {
    template: <Text27 data={$$twenty_seven_text(Math.random())} />,
    data: $$twenty_seven_text,
  },
  {
    template: <Text5 data={$$text_re_5(Math.random())} />,
    data: $$text_re_5,
  },
  {
    template: <Text4 data={$$text_re_4(Math.random())} />,
    data: $$text_re_4,
  },
  {
    template: <Text3 data={$$text_re_3(Math.random())} />,
    data: $$text_re_3,
  },
  {
    template: <Text2 data={$$text_re_2(Math.random())} />,
    data: $$text_re_2,
  },
  {
    template: <Text1 data={$$text_re_1(Math.random())} />,
    data: $$text_re_1,
  },
  {
    template: <Text21 data={$$text_re_21(Math.random())} />,
    data: $$text_re_21,
  },
  {
    template: <Text20 data={$$text_re_20(Math.random())} />,
    data: $$text_re_20,
  },
  {
    template: <Text19 data={$$text_re_19(Math.random())} />,
    data: $$text_re_19,
  },
  {
    template: <Text18 data={$$text_re_18(Math.random())} />,
    data: $$text_re_18,
  },
  {
    template: <Text17 data={$$text_re_17(Math.random())} />,
    data: $$text_re_17,
  },
  {
    template: <Tex16 data={$$text_re_16(Math.random())} />,
    data: $$text_re_16,
  },

  {
    template: <Text15 data={$$text_re_15(Math.random())} />,
    data: $$text_re_15,
  },
  {
    template: <Text14 data={$$text_re_14(Math.random())} />,
    data: $$text_re_14,
  },
  {
    template: <Text13 data={$$text_re_13(Math.random())} />,
    data: $$text_re_13,
  },
  {
    template: <Text12 data={$$text_re_12(Math.random())} />,
    data: $$text_re_12,
  },
  {
    template: <Text11 data={$$text_re_11(Math.random())} />,
    data: $$text_re_11,
  },
  {
    template: <Text10 data={$$text_re_10(Math.random())} />,
    data: $$text_re_10,
  },
  {
    template: <Text9 data={$$text_re_9(Math.random())} />,
    data: $$text_re_9,
  },
  {
    template: <Text8 data={$$text_re_8(Math.random())} />,
    data: $$text_re_8,
  },
  {
    template: <Text7 data={$$text_re_7(Math.random())} />,
    data: $$text_re_7,
  },
  {
    template: <Text6 data={$$text_re_6(Math.random())} />,
    data: $$text_re_6,
  },
  {
    template: <Text22 data={$$text_re_22(Math.random())} />,
    data: $$text_re_22,
  },

  {
    template: <Text23 data={$$text_re_23(Math.random())} />,
    data: $$text_re_23,
  },
  {
    template: <Text27 data={$$text_re_27(Math.random())} />,
    data: $$text_re_27,
  },
  {
    template: <Text26 data={$$text_re_26(Math.random())} />,
    data: $$text_re_26,
  },
  {
    template: <Text25 data={$$text_re_25(Math.random())} />,
    data: $$text_re_25,
  },
  {
    template: <Text24 data={$$text_re_24(Math.random())} />,
    data: $$text_re_24,
  },

  {
    template: <Text52 data={$$text_re_52(Math.random())} />,
    data: $$text_re_52,
  },
  {
    template: <Text51 data={$$text_re_51(Math.random())} />,
    data: $$text_re_51,
  },
  {
    template: <Text50 data={$$text_re_50(Math.random())} />,
    data: $$text_re_50,
  },
  {
    template: <Text49 data={$$text_re_49(Math.random())} />,
    data: $$text_re_49,
  },
  {
    template: <Text48 data={$$text_re_48(Math.random())} />,
    data: $$text_re_48,
  },
  {
    template: <Text47 data={$$text_re_47(Math.random())} />,
    data: $$text_re_47,
  },
  {
    template: <Text46 data={$$text_re_46(Math.random())} />,
    data: $$text_re_46,
  },
  {
    template: <Text45 data={$$text_re_45(Math.random())} />,
    data: $$text_re_45,
  },
  {
    template: <Text44 data={$$text_re_44(Math.random())} />,
    data: $$text_re_44,
  },
  {
    template: <Text43 data={$$text_re_43(Math.random())} />,
    data: $$text_re_43,
  },
  {
    template: <Text42 data={$$text_re_42(Math.random())} />,
    data: $$text_re_42,
  },
  {
    template: <Tex41 data={$$text_re_41(Math.random())} />,
    data: $$text_re_41,
  },
  {
    template: <Tex40 data={$$text_re_40(Math.random())} />,
    data: $$text_re_40,
  },
  {
    template: <Text39 data={$$text_re_39(Math.random())} />,
    data: $$text_re_39,
  },
  {
    template: <Text38 data={$$text_re_38(Math.random())} />,
    data: $$text_re_38,
  },
  {
    template: <Text37 data={$$text_re_37(Math.random())} />,
    data: $$text_re_37,
  },
  {
    template: <Text36 data={$$text_re_36(Math.random())} />,
    data: $$text_re_36,
  },
  {
    template: <Text35 data={$$text_re_35(Math.random())} />,
    data: $$text_re_35,
  },
  {
    template: <Text34 data={$$text_re_34(Math.random())} />,
    data: $$text_re_34,
  },
  {
    template: <Text26 data={$$twenty_six_text(Math.random())} />,
    data: $$twenty_six_text,
  },
];
