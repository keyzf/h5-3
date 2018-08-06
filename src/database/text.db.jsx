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

export const $$text_database = (name, html, height, width, index) => {
  return {
    customize: Map({
      type: 'text',
      index_number: index, // 编辑器赓续index_Number来更新内容
      name: name,
      html_content: html,
    }),
    advance: fromJS({
      style_color: '',
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
    $$text_database('horizontal_text', h_html_text, 147, 300, index)
  );
};
export const $$vertical_text = index => {
  return fromJS($$text_database('vertical_text', v_html_text, 147, 300, index));
};

export const $$text_re_1 = index => {
  return fromJS($$text_database('text_re_1', text_re_1, 50, 240, index));
};
export const $$text_re_2 = index => {
  return fromJS($$text_database('text_re_2', text_re_2, 50, 240, index));
};
export const $$twenty_five_text = index => {
  return fromJS(
    $$text_database('twenty_five_text', twenty_five_html_text, 100, 300, index)
  );
};
export const $$twenty_six_text = index => {
  return fromJS(
    $$text_database('twenty_six_text', twenty_six_html_text, 240, 300, index)
  );
};
export const $$twenty_seven_text = index => {
  return fromJS(
    $$text_database('twenty_seven_text', twenty_seven_html_text, 50, 300, index)
  );
};
export const $$twenty_eight_text = index => {
  return fromJS(
    $$text_database('twenty_eight_text', twenty_eight_html_text, 50, 300, index)
  );
};
export const $$twenty_nine_text = index => {
  return fromJS(
    $$text_database('twenty_nine_text', twenty_nine_html_text, 50, 300, index)
  );
};
export const $$thirty_text = index => {
  return fromJS(
    $$text_database('thirty_text', thirty_html_text, 50, 300, index)
  );
};
export const $$thirty_one_text = index => {
  return fromJS(
    $$text_database('thirty_one_text', thirty_one_html_text, 50, 300, index)
  );
};

export const $$thirty_two_text = index => {
  return fromJS(
    $$text_database('thirty_two_text', thirty_two_html_text, 100, 300, index)
  );
};
export const $$thirty_three_text = index => {
  return fromJS(
    $$text_database(
      'thirty_three_text',
      thirty_three_html_text,
      100,
      300,
      index
    )
  );
};
