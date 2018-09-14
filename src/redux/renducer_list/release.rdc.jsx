import { fromJS } from 'immutable';

const data = fromJS({ url: '' });
export const release_rdc = (state = { data: data }, action) => {
  switch (action.type) {
    case 'RELEASE':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
