import { fromJS } from 'immutable';

const shareMsg_data = {
  data: fromJS({
    cover: '',
    crop_img: '',
    title: '',
    desc: '',
  }),
};

export const shareMsg_rdc = (state = { ...shareMsg_data }, action) => {
  switch (action.type) {
    case 'SHARE_MSG':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
