import { fromJS } from 'immutable';

/**
 * img_model
 * @param state
 * @param action
 * @returns {*}
 */
const img_model_reducer = (
  state = {
    data: fromJS({ user_img: [], user_page_number: '', user_length: 0 }),
  },
  action
) => {
  switch (action.type) {
    case 'IMG_MODEL':
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
export { img_model_reducer };
