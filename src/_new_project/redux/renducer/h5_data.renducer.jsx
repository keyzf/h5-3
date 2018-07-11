import { List } from "immutable";

const h5_data_reducer = (state = { data: List() }, action) => {
  switch (action.type) {
    case "H5_DATA":
      return {
        // 将信息传递给处理函数
        data: action.payload
      };
    default:
      return state;
  }
};
/**
 * 导出文件
 */
export { h5_data_reducer };
