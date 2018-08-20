import { Map, fromJS } from 'immutable';
import { h_html_text } from '../resources/text/core/horizontal_ui';
import { v_html_text } from '../resources/text/core/vertical_ui';
import { twenty_five_html_text } from '../resources/text/recommend/twenty_five_ui';
import { twenty_six_html_text } from '../resources/text/recommend/twenty_six_ui';
import { twenty_seven_html_text } from '../resources/text/recommend/twenty_seven_ui';
import { twenty_eight_html_text } from '../resources/text/recommend/twenty_eight_ui';
import { twenty_nine_html_text } from '../resources/text/recommend/twenty_nine_ui';
import { thirty_html_text } from '../resources/text/recommend/thirty_ui';
import { thirty_one_html_text } from '../resources/text/recommend/thirty_one_ui';
import { thirty_two_html_text } from '../resources/text/recommend/thirty_two_ui';
import { thirty_three_html_text } from '../resources/text/recommend/thirty_three_ui';
import { text_re_1 } from '../resources/text/recommend/text_re_1';
import { text_re_2 } from '../resources/text/recommend/text_re_2';
import { text_re_3 } from '../resources/text/recommend/text_re_3';
import { text_re_4 } from '../resources/text/recommend/text_re_4';
import { text_re_5 } from '../resources/text/recommend/text_re_5';
import { text_re_6 } from '../resources/text/recommend/text_re_6';
import { text_re_7 } from '../resources/text/recommend/text_re_7';
import { text_re_8 } from '../resources/text/recommend/text_re_8';
import { text_re_9 } from '../resources/text/recommend/text_re_9';
import { text_re_10 } from '../resources/text/recommend/text_re_10';
import { text_re_11 } from '../resources/text/recommend/text_re_11';
import { text_re_12 } from '../resources/text/recommend/text_re_12';
import { text_re_13 } from '../resources/text/recommend/text_re_13';
import { text_re_14 } from '../resources/text/recommend/text_re_14';
import { text_re_15 } from '../resources/text/recommend/text_re_15';
import { text_re_16 } from '../resources/text/recommend/text_re_16';
import { text_re_17 } from '../resources/text/recommend/text_re_17';
import { text_re_18 } from '../resources/text/recommend/text_re_18';
import { text_re_19 } from '../resources/text/recommend/text_re_19';
import { text_re_20 } from '../resources/text/recommend/text_re_20';
import { text_re_21 } from '../resources/text/recommend/text_re_21';
import { text_re_22 } from '../resources/text/recommend/text_re_22';
import { text_re_23 } from '../resources/text/recommend/text_re_23';
import { text_re_24 } from '../resources/text/recommend/text_re_24';
import { text_re_25 } from '../resources/text/recommend/text_re_25';
import { text_re_26 } from '../resources/text/recommend/text_re_26';
import { text_re_27 } from '../resources/text/recommend/text_re_27';
import { text_re_34 } from '../resources/text/recommend/text_re_34';
import { text_re_35 } from '../resources/text/recommend/text_re_35';
import { text_re_36 } from '../resources/text/recommend/text_re_36';
import { text_re_37 } from '../resources/text/recommend/text_re_37';
import { text_re_38 } from '../resources/text/recommend/text_re_38';
import { text_re_39 } from '../resources/text/recommend/text_re_39';
import { text_re_40 } from '../resources/text/recommend/text_re_40';
import { text_re_41 } from '../resources/text/recommend/text_re_41';
import { text_re_42 } from '../resources/text/recommend/text_re_42';
import { text_re_43 } from '../resources/text/recommend/text_re_43';
import { text_re_44 } from '../resources/text/recommend/text_re_44';
import { text_re_45 } from '../resources/text/recommend/text_re_45';
import { text_re_46 } from '../resources/text/recommend/text_re_46';
import { text_re_47 } from '../resources/text/recommend/text_re_47';
import { text_re_48 } from '../resources/text/recommend/text_re_48';
import { text_re_49 } from '../resources/text/recommend/text_re_49';
import { text_re_50 } from '../resources/text/recommend/text_re_50';
import { text_re_51 } from '../resources/text/recommend/text_re_51';
import { text_re_52 } from '../resources/text/recommend/text_re_52';

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
    $$text_database('text_re_1', text_re_1, 50, 240, index, 'rgb(51,241,123)')
  );
};
export const $$text_re_2 = index => {
  return fromJS(
    $$text_database('text_re_2', text_re_2, 50, 240, index, 'rgb(124,120,202)')
  );
};
export const $$text_re_3 = index => {
  return fromJS(
    $$text_database('text_re_3', text_re_3, 175, 292, index, '#1e9be8')
  );
};
export const $$text_re_4 = index => {
  return fromJS($$text_database('text_re_4', text_re_4, 175, 292, index));
};
export const $$text_re_5 = index => {
  return fromJS(
    $$text_database('text_re_5', text_re_5, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_6 = index => {
  return fromJS(
    $$text_database('text_re_6', text_re_6, 175, 292, index, '#f58fc6')
  );
};
export const $$text_re_7 = index => {
  return fromJS(
    $$text_database('text_re_7', text_re_7, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_8 = index => {
  return fromJS(
    $$text_database('text_re_8', text_re_8, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_9 = index => {
  return fromJS(
    $$text_database('text_re_9', text_re_9, 175, 292, index, '#57d9ff')
  );
};
export const $$text_re_10 = index => {
  return fromJS(
    $$text_database('text_re_10', text_re_10, 175, 292, index, '#fff10c')
  );
};
export const $$text_re_11 = index => {
  return fromJS(
    $$text_database('text_re_11', text_re_11, 175, 292, index, '#f05454')
  );
};
export const $$text_re_12 = index => {
  return fromJS(
    $$text_database('text_re_12', text_re_12, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_13 = index => {
  return fromJS(
    $$text_database('text_re_13', text_re_13, 175, 292, index, '#57d9ff')
  );
};
export const $$text_re_14 = index => {
  return fromJS(
    $$text_database('text_re_14', text_re_14, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_15 = index => {
  return fromJS(
    $$text_database('text_re_15', text_re_15, 175, 292, index, '#fff10c')
  );
};
export const $$text_re_16 = index => {
  return fromJS(
    $$text_database('text_re_16', text_re_16, 175, 292, index, '#f96e57')
  );
};
export const $$text_re_17 = index => {
  return fromJS(
    $$text_database('text_re_17', text_re_17, 175, 292, index, '#f05454')
  );
};
export const $$text_re_18 = index => {
  return fromJS(
    $$text_database('text_re_18', text_re_18, 175, 292, index, '#7880c8')
  );
};
export const $$text_re_19 = index => {
  return fromJS(
    $$text_database('text_re_19', text_re_19, 175, 292, index, '#f58fc6')
  );
};
export const $$text_re_20 = index => {
  return fromJS(
    $$text_database('text_re_20', text_re_20, 175, 292, index, '#76e57b')
  );
};
export const $$text_re_21 = index => {
  return fromJS(
    $$text_database('text_re_21', text_re_21, 175, 292, index, '#f05454')
  );
};
export const $$text_re_22 = index => {
  return fromJS(
    $$text_database('text_re_22', text_re_22, 175, 292, index, '#ff8c00')
  );
};
export const $$text_re_23 = index => {
  return fromJS(
    $$text_database('text_re_23', text_re_23, 175, 292, index, '#aaa')
  );
};
export const $$text_re_24 = index => {
  return fromJS(
    $$text_database('text_re_24', text_re_24, 175, 292, index, '#ebe6d9')
  );
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
  return fromJS(
    $$text_database('text_re_34', text_re_34, 175, 292, index, '#fff10c')
  );
};
export const $$text_re_35 = index => {
  return fromJS(
    $$text_database('text_re_35', text_re_35, 175, 292, index, '#57d9ff')
  );
};
export const $$text_re_36 = index => {
  return fromJS(
    $$text_database('text_re_36', text_re_36, 175, 292, index, '#f05454')
  );
};
export const $$text_re_37 = index => {
  return fromJS(
    $$text_database('text_re_37', text_re_37, 175, 292, index, '#33ebe4')
  );
};
export const $$text_re_38 = index => {
  return fromJS(
    $$text_database('text_re_38', text_re_38, 175, 292, index, '#76e57b')
  );
};
export const $$text_re_39 = index => {
  return fromJS(
    $$text_database('text_re_39', text_re_39, 175, 292, index, '#57d9ff')
  );
};
export const $$text_re_40 = index => {
  return fromJS(
    $$text_database('text_re_40', text_re_40, 175, 292, index, '#f87a7a')
  );
};
export const $$text_re_41 = index => {
  return fromJS(
    $$text_database('text_re_41', text_re_41, 175, 292, index, '#76e57b')
  );
};
export const $$text_re_42 = index => {
  return fromJS(
    $$text_database('text_re_42', text_re_42, 115, 292, index, '#f05454')
  );
};
export const $$text_re_43 = index => {
  return fromJS(
    $$text_database('text_re_43', text_re_43, 107, 260, index, '#76e57b')
  );
};
export const $$text_re_44 = index => {
  return fromJS(
    $$text_database('text_re_44', text_re_44, 90, 281, index, '#33ebe4')
  );
};
export const $$text_re_45 = index => {
  return fromJS(
    $$text_database('text_re_45', text_re_45, 146, 277, index, '#7880c8')
  );
};
export const $$text_re_46 = index => {
  return fromJS(
    $$text_database('text_re_46', text_re_46, 163, 254, index, '#57d9ff')
  );
};
export const $$text_re_47 = index => {
  return fromJS(
    $$text_database('text_re_47', text_re_47, 282, 207, index, '#f58fc6')
  );
};
export const $$text_re_48 = index => {
  return fromJS(
    $$text_database('text_re_48', text_re_48, 221, 283, index, '#f58fc6')
  );
};
export const $$text_re_49 = index => {
  return fromJS(
    $$text_database('text_re_49', text_re_49, 111, 271, index, '#33ebe4')
  );
};
export const $$text_re_50 = index => {
  return fromJS(
    $$text_database('text_re_50', text_re_50, 125, 264, index, '#1e9be8')
  );
};
export const $$text_re_51 = index => {
  return fromJS(
    $$text_database('text_re_51', text_re_51, 129, 252, index, '#33ebe4')
  );
};
export const $$text_re_52 = index => {
  return fromJS(
    $$text_database('text_re_52', text_re_52, 206, 284, index, '#57d9ff')
  );
};
export const $$twenty_five_text = index => {
  return fromJS(
    $$text_database(
      'twenty_five_text',
      twenty_five_html_text,
      100,
      300,
      index,
      'black'
    )
  );
};
export const $$twenty_six_text = index => {
  return fromJS(
    $$text_database(
      'twenty_six_text',
      twenty_six_html_text,
      240,
      300,
      index,
      'black'
    )
  );
};
export const $$twenty_seven_text = index => {
  return fromJS(
    $$text_database(
      'twenty_seven_text',
      twenty_seven_html_text,
      50,
      300,
      index,
      'yellow'
    )
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
