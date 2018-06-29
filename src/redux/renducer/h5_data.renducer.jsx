import { List } from "immutable";

/**
 * 核心组件（制作h5,修改h5 页面数据集存放的地方）
 * @param state
 * @param action
 * @returns {*}
 */
const h5_data_reducer = (state = { data: List() }, action) => {
  switch (action.type) {
    case "H5_DATA":
      return {
        // 将信息传递给处理函数
        data: action.payload
      };
    //  后期移除
    case "SELECT_COMPONENTS":
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
