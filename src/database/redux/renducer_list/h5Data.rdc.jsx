import { fromJS } from 'immutable';

export const h5Data_rdc = (
  state = {
    data: fromJS([
      {
        customize: {
          type: 'text',
          index_number: 0.3493262826073513,
          name: 'horizontal_text',
          html_content:
            '<h2 style="text-align:center;">横排文本示例</h2><br/><h4 style="text-align:center;font-size: 16px">教程</h4><br/><p style="text-align:center;">点左侧组件可以添加新内容</p><br/><p style="text-align:center;">点一下可以进行删除等操作</p>',
        },
        advance: {
          color: '',
          img: '',
          width: 300,
          left: 12,
          move: true,
          height: 200,
          live: false,
          crop_img: '',
          top: 32,
          style_color: '',
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
        },
      },
    ]),
  },
  action
) => {
  switch (action.type) {
    case 'H5_DATA':
      return {
        // 将信息传递给处理函数
        data: action.payload,
      };
    default:
      return state;
  }
};
