import { fromJS } from 'immutable';

const data = fromJS({ upload_library: [], choose_url: '' });
const user_music_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case 'USER_MUSIC':
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
export { user_music_reducer };
