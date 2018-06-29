/**
 * redux 根数据源
 * 程序中有且只能有一个
 */
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root.reducer";

/**
 * 建立数据源函数
 * @type {*}
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

/**
 * 导出数据
 */
export {
  store
};