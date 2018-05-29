import { Map, fromJS } from 'immutable';

export const h_html_text =
  '<h2 style="text-align:center;">横排文本</h2><p style="text-align:center;"> 在这里填充内容<br/>在这里填充内容<br/>在这里填充内容<br/>在这里填充内容<br/>在这里填充内容</p>';
export const v_html_text =
  '<h2 style="text-align:center;">竖排文本</h2><p style="text-align:center;"> 在这里填充内容<br/>在这里填充内容<br/>在这里填充内容<br/>在这里填充内容<br/>在这里填充内容</p>';

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
