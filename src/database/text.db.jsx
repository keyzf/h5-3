import { Map, fromJS } from 'immutable';
import { h_html_text } from '../resources/text/core/horizontal_ui';
import { v_html_text } from '../resources/text/core/vertical_ui';
import { one_html_text } from '../resources/text/recommend/one_ui';
import { two_html_text } from '../resources/text/recommend/two_ui';
import { three_html_text } from '../resources/text/recommend/three_ui';
import { four_html_text } from '../resources/text/recommend/four_ui';
import { five_html_text } from '../resources/text/recommend/five_ui';
import { six_html_text } from '../resources/text/recommend/six_ui';
import { seven_html_text } from '../resources/text/recommend/seven_ui';
import { eight_html_text } from '../resources/text/recommend/eight_ui';
import { nine_html_text } from '../resources/text/recommend/nine_ui';
import { ten_html_text } from '../resources/text/recommend/ten_ui';
import { eleven_html_text } from '../resources/text/recommend/eleven_ui';
import { twelve_html_text } from '../resources/text/recommend/twelve_ui';
import { thirteen_html_text } from '../resources/text/recommend/thirteen_ui';
import { fourteen_html_text } from '../resources/text/recommend/fourteen_ui';
import { fifteen_html_text } from '../resources/text/recommend/fifteen_ui';
import { sixteen_html_text } from '../resources/text/recommend/sixteen_ui';
import { seventeen_html_text } from '../resources/text/recommend/seventeen_ui';
import { eighteen_html_text } from '../resources/text/recommend/eighteen_ui';
import { nineteen_html_text } from '../resources/text/recommend/nineteen_ui';
import { twenty_html_text } from '../resources/text/recommend/twenty_ui';
import { twenty_one_html_text } from '../resources/text/recommend/twenty_one_ui';
import { twenty_two_html_text } from '../resources/text/recommend/twenty_two_ui';
import { twenty_three_html_text } from '../resources/text/recommend/twenty_three_ui';
import { twenty_four_html_text } from '../resources/text/recommend/twenty_four_ui';
import { twenty_five_html_text } from '../resources/text/recommend/twenty_five_ui';
import { twenty_six_html_text } from '../resources/text/recommend/twenty_six_ui';
import { twenty_seven_html_text } from '../resources/text/recommend/twenty_seven_ui';

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
export const $$one_text = index => {
  return fromJS($$text_database('one_text', one_html_text, 68, 300, index));
};
export const $$two_text = index => {
  return fromJS($$text_database('two_text', two_html_text, 37, 300, index));
};
export const $$three_text = index => {
  return fromJS($$text_database('three_text', three_html_text, 37, 300, index));
};
export const $$four_text = index => {
  return fromJS($$text_database('four_text', four_html_text, 37, 300, index));
};
export const $$five_text = index => {
  return fromJS($$text_database('five_text', five_html_text, 47, 300, index));
};
export const $$six_text = index => {
  return fromJS($$text_database('six_text', six_html_text, 47, 300, index));
};
export const $$seven_text = index => {
  return fromJS($$text_database('seven_text', seven_html_text, 40, 300, index));
};
export const $$eight_text = index => {
  return fromJS($$text_database('eight_text', eight_html_text, 47, 300, index));
};
export const $$nine_text = index => {
  return fromJS($$text_database('nine_text', nine_html_text, 34, 300, index));
};
export const $$ten_text = index => {
  return fromJS($$text_database('ten_text', ten_html_text, 34, 300, index));
};
export const $$eleven_text = index => {
  return fromJS(
    $$text_database('eleven_text', eleven_html_text, 35, 300, index)
  );
};
export const $$twelve_text = index => {
  return fromJS(
    $$text_database('twelve_text', twelve_html_text, 36, 300, index)
  );
};
export const $$thirteen_text = index => {
  return fromJS(
    $$text_database('thirteen_text', thirteen_html_text, 78, 300, index)
  );
};
export const $$fourteen_text = index => {
  return fromJS(
    $$text_database('fourteen_text', fourteen_html_text, 78, 300, index)
  );
};
export const $$fifteen_text = index => {
  return fromJS(
    $$text_database('fifteen_text', fifteen_html_text, 130, 300, index)
  );
};
export const $$sixteen_text = index => {
  return fromJS(
    $$text_database('sixteen_text', sixteen_html_text, 130, 300, index)
  );
};
export const $$seventeen_text = index => {
  return fromJS(
    $$text_database('seventeen_text', seventeen_html_text, 80, 300, index)
  );
};
export const $$eighteen_text = index => {
  return fromJS(
    $$text_database('eighteen_text', eighteen_html_text, 80, 300, index)
  );
};
export const $$nineteen_text = index => {
  return fromJS(
    $$text_database('nineteen_text', nineteen_html_text, 80, 300, index)
  );
};
export const $$twenty_text = index => {
  return fromJS(
    $$text_database('twenty_text', twenty_html_text, 80, 300, index)
  );
};
export const $$twenty_one_text = index => {
  return fromJS(
    $$text_database('twenty_one_text', twenty_one_html_text, 80, 300, index)
  );
};
export const $$twenty_two_text = index => {
  return fromJS(
    $$text_database('twenty_two_text', twenty_two_html_text, 80, 300, index)
  );
};
export const $$twenty_three_text = index => {
  return fromJS(
    $$text_database('twenty_three_text', twenty_three_html_text, 80, 300, index)
  );
};
export const $$twenty_four_text = index => {
  return fromJS(
    $$text_database('twenty_four_text', twenty_four_html_text, 80, 300, index)
  );
};
export const $$twenty_five_text = index => {
  return fromJS(
    $$text_database('twenty_five_text', twenty_five_html_text, 80, 300, index)
  );
};

export const $$twenty_six_text = index => {
  return fromJS(
    $$text_database('twenty_six_text', twenty_six_html_text, 240, 300, index)
  );
};

export const $$twenty_seven_text = index => {
  return fromJS(
    $$text_database(
      'twenty_seven_text',
      twenty_seven_html_text,
      240,
      300,
      index
    )
  );
};
