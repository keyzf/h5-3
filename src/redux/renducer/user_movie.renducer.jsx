import { fromJS } from 'immutable';

/**
 * img_model
 * @param state
 * @param action
 * @returns {*}
 */
const user_movie_reducer = (
  state = {
    data: fromJS({ user_movie: [], user_page_number: '', user_length: 0 }),
  },
  action
) => {
  switch (action.type) {
    case 'USER_MOVIE':
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
export { user_movie_reducer };
