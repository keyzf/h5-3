import { Map, fromJS } from 'immutable';

export const one_html_text =
  '<p>这里填充标题<br/>填充补充内容填充补充内容填充补充内容</p>';
export const two_html_text = '<p>请在这里填入适当的内容！</p>';
export const three_html_text = '位置定位';
export const four_html_text = '时刻钟表';
export const five_html_text = '在这里填充合适的内容';
export const six_html_text = '极度完美主义';
export const seven_html_text = '<h1>主讲人</h1>';
/**
 * 核心数据结构
 * @param name
 * @param html
 * @returns {{customize: (*|Immutable.Map<any, any>|Immutable.Map<string, number>), advance: any}}
 */
export const $$text_database = (name, html) => {
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
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
    }),
  };
};

// 横排文本默认样式
export const h_html_text =
  '<h2 style="text-align:center;">横排文本示例</h2><p style="text-align:center;"> <h3 style="text-align:center;">上邪</h3><p style="text-align:center;"> 上邪，我欲与君相知，长命无绝衰。<br/>山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝</p>';
// 竖排样式默认样式
export const v_html_text =
  '<h2 style="text-align:center;">竖排文本示例</h2> <h3 style="text-align:center;">元日</h3><p style="text-align:center;">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p>';
