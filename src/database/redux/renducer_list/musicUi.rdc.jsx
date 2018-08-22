import { fromJS } from 'immutable';

export const musicUi_rdc = (
  state = { data: fromJS({ music_url: '', desc: '' }) },
  action
) => {
  switch (action.type) {
    case 'MUSIC_UI':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
