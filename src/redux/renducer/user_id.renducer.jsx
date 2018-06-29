/**
 * 通过解析登录进来的url,获取用户的id ,并存储起来
 */
import { Map } from "immutable";

/**
 * user_id 数据处理层
 * @param state
 * @param action
 * @returns {*}
 */
const user_id_reducer = (state = { data: Map({ user_id: null }) }, action) => {
  switch (action.type) {
    case "USER_ID":
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
export { user_id_reducer };
