import { fromJS } from "immutable";

/**
 * h5 页面引导
 * @param state
 * @param action
 * @returns {*}
 */
const guide_reducer = (state = { data: fromJS({ guide: false }) }, action) => {
  switch (action.type) {
    case "GUIDE":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

/**
 * 导出文件
 */
export { guide_reducer };
