import { fromJS } from 'immutable';

/**
 * img_model
 * @param state
 * @param action
 * @returns {*}
 */
const img_library_reducer = (
  state = { data: fromJS({ img: [], length: 0, list: [] }) },
  action
) => {
  switch (action.type) {
    case 'IMG_LIBRARY':
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
export { img_library_reducer };
