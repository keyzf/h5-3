import { Map, fromJS } from 'immutable';
import { h_html_text } from './core/horizontal_ui';
import { v_html_text } from './core/vertical_ui';
import { twenty_eight_html_text } from './recommend/Text28';
import { twenty_nine_html_text } from './recommend/Text29';
import { thirty_html_text } from './recommend/Text30';
import { thirty_one_html_text } from './recommend/Text31';
import { thirty_two_html_text } from './recommend/Text32';
import { thirty_three_html_text } from './recommend/Text33';
import { text1 } from './recommend/Text1';
import { text2 } from './recommend/Text2';
import { text3 } from './recommend/Text3';
import { text4 } from './recommend/Text4';
import { text5 } from './recommend/Text5';
import { text6 } from './recommend/Text6';
import { text7 } from './recommend/Text7';
import { text8 } from './recommend/Text8';
import { text9 } from './recommend/Text9';
import { text10 } from './recommend/Text10';
import { text_re_11 } from './recommend/Text11';
import { text12 } from './recommend/Text12';
import { text13 } from './recommend/Text13';
import { text14 } from './recommend/Text14';
import { text15 } from './recommend/Text15';
import { text16 } from './recommend/Text16';
import { text17 } from './recommend/Text17';
import { text18 } from './recommend/Text18';
import { text19 } from './recommend/Text19';
import { text20 } from './recommend/Text20';
import { text21 } from './recommend/Text21';
import { text22 } from './recommend/Text22';
import { text23 } from './recommend/Text23';
import { text24 } from './recommend/Text24';
import { text_re_25 } from './recommend/Text25';
import { text_re_26 } from './recommend/Text26';
import { text_re_27 } from './recommend/Text27';
import { text34 } from './recommend/Text34';
import { text35 } from './recommend/Text35';
import { text36 } from './recommend/Text36';
import { text_re_37 } from './recommend/Text37';
import { text38 } from './recommend/Text38';
import { text39 } from './recommend/Text39';
import { text40 } from './recommend/Text40';
import { text41 } from './recommend/Text41';
import { text42 } from './recommend/Text42';
import { text43 } from './recommend/Text43';
import { text44 } from './recommend/Text44';
import { text45 } from './recommend/Text45';
import { text46 } from './recommend/Text46';
import { text47 } from './recommend/Text47';
import { text48 } from './recommend/Text48';
import { text49 } from './recommend/Text49';
import { text50 } from './recommend/Text50';
import { text51 } from './recommend/Text51';
import { text52 } from './recommend/Text52';

export const $$text_database = (
  name,
  html,
  height,
  width,
  index,
  style_color = ''
) => {
  return {
    customize: Map({
      type: 'text',
      index_number: index, // 编辑器赓续index_Number来更新内容
      name: name,
      html_content: html,
    }),
    advance: fromJS({
      style_color: style_color,
      color: '',
      img: '',
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      width: width,
      height: height,
      move: false,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100,
      live: false,
    }),
  };
};

export const $$horizontal_text = index => {
  return fromJS(
    $$text_database('horizontal_text', h_html_text, 85, 300, index)
  );
};
export const $$vertical_text = index => {
  return fromJS($$text_database('vertical_text', v_html_text, 148, 300, index));
};

export const $$text_re_1 = index => {
  return fromJS(
    $$text_database('text1', text1, 50, 240, index, 'rgb(51,241,123)')
  );
};
export const $$text_re_2 = index => {
  return fromJS(
    $$text_database('text2', text2, 50, 240, index, 'rgb(124,120,202)')
  );
};
export const $$text_re_3 = index => {
  return fromJS($$text_database('text3', text3, 175, 292, index, '#1e9be8'));
};
export const $$text_re_4 = index => {
  return fromJS($$text_database('text4', text4, 175, 292, index));
};
export const $$text_re_5 = index => {
  return fromJS($$text_database('text5', text5, 175, 292, index, '#ff8c00'));
};
export const $$text_re_6 = index => {
  return fromJS($$text_database('text6', text6, 175, 292, index, '#f58fc6'));
};
export const $$text_re_7 = index => {
  return fromJS($$text_database('text7', text7, 175, 292, index, '#ff8c00'));
};
export const $$text_re_8 = index => {
  return fromJS($$text_database('text8', text8, 175, 292, index, '#ff8c00'));
};
export const $$text_re_9 = index => {
  return fromJS($$text_database('text9', text9, 175, 292, index, '#57d9ff'));
};
export const $$text_re_10 = index => {
  return fromJS($$text_database('text10', text10, 175, 292, index, '#fff10c'));
};
export const $$text_re_11 = index => {
  return fromJS(
    $$text_database('text_re_11', text_re_11, 175, 292, index, '#f05454')
  );
};
export const $$text_re_12 = index => {
  return fromJS($$text_database('text12', text12, 175, 292, index, '#ff8c00'));
};
export const $$text_re_13 = index => {
  return fromJS($$text_database('text13', text13, 175, 292, index, '#57d9ff'));
};
export const $$text_re_14 = index => {
  return fromJS($$text_database('text14', text14, 175, 292, index, '#ff8c00'));
};
export const $$text_re_15 = index => {
  return fromJS($$text_database('text15', text15, 175, 292, index, '#fff10c'));
};
export const $$text_re_16 = index => {
  return fromJS($$text_database('text16', text16, 175, 292, index, '#f96e57'));
};
export const $$text_re_17 = index => {
  return fromJS($$text_database('text17', text17, 175, 292, index, '#f05454'));
};
export const $$text_re_18 = index => {
  return fromJS($$text_database('text18', text18, 175, 292, index, '#7880c8'));
};
export const $$text_re_19 = index => {
  return fromJS($$text_database('text19', text19, 175, 292, index, '#f58fc6'));
};
export const $$text_re_20 = index => {
  return fromJS($$text_database('text20', text20, 175, 292, index, '#76e57b'));
};
export const $$text_re_21 = index => {
  return fromJS($$text_database('text21', text21, 175, 292, index, '#f05454'));
};
export const $$text_re_22 = index => {
  return fromJS($$text_database('text22', text22, 175, 292, index, '#ff8c00'));
};
export const $$text_re_23 = index => {
  return fromJS($$text_database('text23', text23, 175, 292, index, '#aaa'));
};
export const $$text_re_24 = index => {
  return fromJS($$text_database('text24', text24, 175, 292, index, '#ebe6d9'));
};
export const $$text_re_25 = index => {
  return fromJS(
    $$text_database('text_re_25', text_re_25, 175, 292, index, '#7880c8')
  );
};
export const $$text_re_26 = index => {
  return fromJS(
    $$text_database('text_re_26', text_re_26, 175, 292, index, '#76e57b')
  );
};
export const $$text_re_27 = index => {
  return fromJS(
    $$text_database('text_re_27', text_re_27, 175, 292, index, '#f58fc6')
  );
};
export const $$text_re_34 = index => {
  return fromJS($$text_database('text34', text34, 175, 292, index, '#fff10c'));
};
export const $$text_re_35 = index => {
  return fromJS($$text_database('text35', text35, 175, 292, index, '#57d9ff'));
};
export const $$text_re_36 = index => {
  return fromJS($$text_database('text36', text36, 175, 292, index, '#f05454'));
};
export const $$text_re_37 = index => {
  return fromJS(
    $$text_database('text_re_37', text_re_37, 175, 292, index, '#33ebe4')
  );
};
export const $$text_re_38 = index => {
  return fromJS($$text_database('text38', text38, 175, 292, index, '#76e57b'));
};
export const $$text_re_39 = index => {
  return fromJS($$text_database('text39', text39, 175, 292, index, '#57d9ff'));
};
export const $$text_re_40 = index => {
  return fromJS($$text_database('text40', text40, 175, 292, index, '#f87a7a'));
};
export const $$text_re_41 = index => {
  return fromJS($$text_database('text41', text41, 175, 292, index, '#76e57b'));
};
export const $$text_re_42 = index => {
  return fromJS($$text_database('text42', text42, 115, 292, index, '#f05454'));
};
export const $$text_re_43 = index => {
  return fromJS($$text_database('text43', text43, 107, 260, index, '#76e57b'));
};
export const $$text_re_44 = index => {
  return fromJS($$text_database('text44', text44, 90, 281, index, '#33ebe4'));
};
export const $$text_re_45 = index => {
  return fromJS($$text_database('text45', text45, 146, 277, index, '#7880c8'));
};
export const $$text_re_46 = index => {
  return fromJS($$text_database('text46', text46, 163, 254, index, '#57d9ff'));
};
export const $$text_re_47 = index => {
  return fromJS($$text_database('text47', text47, 282, 207, index, '#f58fc6'));
};
export const $$text_re_48 = index => {
  return fromJS($$text_database('text48', text48, 221, 283, index, '#f58fc6'));
};
export const $$text_re_49 = index => {
  return fromJS($$text_database('text49', text49, 111, 271, index, '#33ebe4'));
};
export const $$text_re_50 = index => {
  return fromJS($$text_database('text50', text50, 125, 264, index, '#1e9be8'));
};
export const $$text_re_51 = index => {
  return fromJS($$text_database('text51', text51, 129, 252, index, '#33ebe4'));
};
export const $$text_re_52 = index => {
  return fromJS($$text_database('text52', text52, 206, 284, index, '#57d9ff'));
};
export const $$twenty_five_text = index => {
  return fromJS(
    $$text_database('twenty_five_text', text_re_25, 100, 300, index, 'black')
  );
};
export const $$twenty_six_text = index => {
  return fromJS(
    $$text_database('twenty_six_text', text_re_26, 240, 300, index, 'black')
  );
};
export const $$twenty_seven_text = index => {
  return fromJS(
    $$text_database('twenty_seven_text', text_re_27, 50, 300, index, 'yellow')
  );
};
export const $$twenty_eight_text = index => {
  return fromJS(
    $$text_database(
      'twenty_eight_text',
      twenty_eight_html_text,
      50,
      300,
      index,
      'rgb(0,220,255)'
    )
  );
};
export const $$twenty_nine_text = index => {
  return fromJS(
    $$text_database(
      'twenty_nine_text',
      twenty_nine_html_text,
      50,
      300,
      index,
      'rgb(0,214,205)'
    )
  );
};
export const $$thirty_text = index => {
  return fromJS(
    $$text_database(
      'thirty_text',
      thirty_html_text,
      50,
      300,
      index,
      'rgb(0,214,205)'
    )
  );
};
export const $$thirty_one_text = index => {
  return fromJS(
    $$text_database(
      'thirty_one_text',
      thirty_one_html_text,
      50,
      300,
      index,
      'rgb(0,161,159)'
    )
  );
};

export const $$thirty_two_text = index => {
  return fromJS(
    $$text_database(
      'thirty_two_text',
      thirty_two_html_text,
      100,
      300,
      index,
      'rgb(0,171,225)'
    )
  );
};
export const $$thirty_three_text = index => {
  return fromJS(
    $$text_database(
      'thirty_three_text',
      thirty_three_html_text,
      100,
      300,
      index,
      'rgb(74,78,115)'
    )
  );
};
