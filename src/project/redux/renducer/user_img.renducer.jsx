import { fromJS } from 'immutable';

const data = fromJS({ upload_library: [], choose_url: '' });
const user_img_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case 'USER_IMG':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export { user_img_reducer };
