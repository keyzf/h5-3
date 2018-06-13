import { Map, fromJS } from 'immutable';
import { one_html_text } from './recommend/one_ui';
import { two_html_text } from './recommend/two_ui';
import { three_html_text } from './recommend/three_ui';
import { four_html_text } from './recommend/four_ui';
import { five_html_text } from './recommend/five_ui';
import { six_html_text } from './recommend/six_ui';
import { seven_html_text } from './recommend/seven_ui';
import { eight_html_text } from './recommend/eight_ui';
import { nine_html_text } from './recommend/nine_ui';
import { ten_html_text } from './recommend/ten_ui';
import { eleven_html_text } from './recommend/eleven_ui';
import { twelve_html_text } from './recommend/twelve_ui';
import { thirteen_html_text } from './recommend/thirteen_ui';
import { fourteen_html_text } from './recommend/fourteen_ui';
import { fifteen_html_text } from './recommend/fifteen_ui';
import { sixteen_html_text } from './recommend/sixteen_ui';
import { seventeen_html_text } from './recommend/seventeen_ui';
import { h_html_text } from './core/horizontal_ui';
import { v_html_text } from './core/vertical_ui';

/**
 * 根级数据，用来生成组件
 * @param name
 * @param html
 * @returns {{customize: (*|Immutable.Map<any, any>|Immutable.Map<string, number>), advance: any}}
 */
const $$text_database = (name, html) => {
  return {
    customize: Map({
      index_number: Math.random(), // 编辑器赓续index_Number来更新内容
      name: name,
      html_content: html,
    }),
    advance: fromJS({
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      perimeter: { width: { value: 319 }, height: { value: 147 } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    }),
  };
};

/**
 * 各组件的数据
 * @type {any}
 */
const $$horizontal_text = fromJS(
  $$text_database('horizontal_text', h_html_text)
);
const $$vertical_text = fromJS($$text_database('vertical_text', v_html_text));
const $$one_text = fromJS($$text_database('one_text', one_html_text));
const $$two_text = fromJS($$text_database('two_text', two_html_text));
const $$three_text = fromJS($$text_database('three_text', three_html_text));
const $$four_text = fromJS($$text_database('four_text', four_html_text));
const $$five_text = fromJS($$text_database('five_text', five_html_text));
const $$six_text = fromJS($$text_database('six_text', six_html_text));
const $$seven_text = fromJS($$text_database('seven_text', seven_html_text));
const $$eight_text = fromJS($$text_database('eight_text', eight_html_text));
const $$nine_text = fromJS($$text_database('nine_text', nine_html_text));
const $$ten_text = fromJS($$text_database('ten_text', ten_html_text));
const $$eleven_text = fromJS($$text_database('eleven_text', eleven_html_text));
const $$twelve_text = fromJS($$text_database('twelve_text', twelve_html_text));
const $$thirteen_text = fromJS(
  $$text_database('thirteen_text', thirteen_html_text)
);
const $$fourteen_text = fromJS(
  $$text_database('fourteen_text', fourteen_html_text)
);
const $$fifteen_text = fromJS(
  $$text_database('fifteen_text', fifteen_html_text)
);
const $$sixteen_text = fromJS(
  $$text_database('sixteen_text', sixteen_html_text)
);
const $$seventeen_text = fromJS(
  $$text_database('seventeen_text', seventeen_html_text)
);
export {
  $$horizontal_text,
  $$vertical_text,
  $$one_text,
  $$two_text,
  $$three_text,
  $$four_text,
  $$five_text,
  $$six_text,
  $$seven_text,
  $$eight_text,
  $$nine_text,
  $$ten_text,
  $$eleven_text,
  $$twelve_text,
  $$thirteen_text,
  $$fourteen_text,
  $$fifteen_text,
  $$sixteen_text,
  $$seventeen_text,
};
