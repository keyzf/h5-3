import { $$background_database } from '../../ui/background/background_database';

/**
 * 背景组件默认数据
 * @param state
 * @param action
 * @returns {*}
 */
const bg_reducer = (state = { data: $$background_database }, action) => {
  switch (action.type) {
    case 'BG_UI':
      return {
        data: action.payload,
      };
    // 后期移除
    case 'BG_COMPONENTS':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

/**
 * 导出文件
 */
export { bg_reducer };
