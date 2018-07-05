import { fromJS } from 'immutable';

/**
 * 获取页面发布时的链接，用来生成二维码
 * @param state
 * @param action
 * @returns {*}
 */
const release_reducer = (state = { data: fromJS({ url: '' }) }, action) => {
  switch (action.type) {
    case 'RELEASE':
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
export { release_reducer };
