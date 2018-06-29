import { Map } from "immutable";

const choose_data = {
  data: Map(),
  meta: Map({ content: false, choose: false })
};

const choose_reducer = (state = { ...choose_data }, action) => {
  switch (action.type) {
    case "CHOOSE_UI":
      return {
        data: action.payload,
        meta: action.meta
      };
    //  后期移除
    case "CHOOSE_COMPONENTS":
      return {
        data: action.payload,
        meta: action.meta
      };
    default:
      return state;
  }
};
/**
 * 导出文件
 */
export { choose_reducer };
