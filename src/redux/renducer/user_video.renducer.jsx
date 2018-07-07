import { fromJS } from 'immutable';

/**
 * img_model
 * @param state
 * @param action
 * @returns {*}
 */
const user_video_reducer = (
  state = {
    data: fromJS({ user_music: [], user_page_number: '', user_length: 0 }),
  },
  action
) => {
  switch (action.type) {
    case 'USER_VIDEO':
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
export { user_video_reducer };
