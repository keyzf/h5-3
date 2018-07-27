import { List } from 'immutable';

export const h5Data_rdc = (state = { data: List() }, action) => {
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
