import { fromJS } from 'immutable';

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
