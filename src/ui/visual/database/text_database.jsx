import { Map, fromJS } from "immutable";
import { one_html_text } from "../../text/one_ui";
import { two_html_text } from "../../text/two_ui";
import { three_html_text } from "../../text/three_ui";
import { four_html_text } from "../../text/four_ui";
import { five_html_text } from "../../text/five_ui";
import { six_html_text } from "../../text/six_ui";
import { seven_html_text } from "../../text/seven_ui";
import { eight_html_text } from "../../text/eight_ui";
import { nine_html_text } from "../../text/nine_ui";
import { ten_html_text } from "../../text/ten_ui";
import { eleven_html_text } from "../../text/eleven_ui";
import { twelve_html_text } from "../../text/twelve_ui";
import { thirteen_html_text } from "../../text/thirteen_ui";
import { fourteen_html_text } from "../../text/fourteen_ui";
import { fifteen_html_text } from "../../text/fifteen_ui";
import { sixteen_html_text } from "../../text/sixteen_ui";
import { seventeen_html_text } from "../../text/seventeen_ui";

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
      html_content: html
    }),
    advance: fromJS({
      color: "",
      img: "",
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      },
      perimeter: { width: { value: 319 }, height: { value: 147 } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 }
      }
    })
  };
};

/**
 * 可编辑的html信息
 * @type {string}
 */
const h_html_text =
  "<h2 style=\"text-align:center;\">横排文本示例</h2><p style=\"text-align:center;\"> <h3 style=\"text-align:center;\">上邪</h3><p style=\"text-align:center;\"> 上邪，我欲与君相知，长命无绝衰。<br/>山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝</p>";
const v_html_text =
  "<h2 style=\"text-align:center;\">竖排文本示例</h2> <h3 style=\"text-align:center;\">元日</h3><p style=\"text-align:center;\">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p>";

/**
 * 各组件的数据
 * @type {any}
 */
const $$horizontal_text = fromJS(
  $$text_database("horizontal_text", h_html_text)
);
const $$vertical_text = fromJS($$text_database("vertical_text", v_html_text));
const $$one_text = fromJS($$text_database("one_text", one_html_text));
const $$two_text = fromJS($$text_database("two_text", two_html_text));
const $$three_text = fromJS($$text_database("three_text", three_html_text));
const $$four_text = fromJS($$text_database("four_text", four_html_text));
const $$five_text = fromJS($$text_database("five_text", five_html_text));
const $$six_text = fromJS($$text_database("six_text", six_html_text));
const $$seven_text = fromJS($$text_database("seven_text", seven_html_text));
const $$eight_text = fromJS($$text_database("eight_text", eight_html_text));
const $$nine_text = fromJS($$text_database("nine_text", nine_html_text));
const $$ten_text = fromJS($$text_database("ten_text", ten_html_text));
const $$eleven_text = fromJS($$text_database("eleven_text", eleven_html_text));
const $$twelve_text = fromJS($$text_database("twelve_text", twelve_html_text));
const $$thirteen_text = fromJS($$text_database("thirteen_text", thirteen_html_text));
const $$fourteen_text = fromJS($$text_database("fourteen_text", fourteen_html_text));
const $$fifteen_text = fromJS($$text_database("fifteen_text", fifteen_html_text));
const $$sixteen_text = fromJS($$text_database("sixteen_text", sixteen_html_text));
const $$seventeen_text  =  fromJS($$text_database("sixteen_text",seventeen_html_text));
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
  $$seventeen_text
};
