import { fromJS } from 'immutable';

const data = fromJS({ sid: null });
export const sid_rdc = (state = { data: data }, action) => {
  switch (action.type) {
    case 'SID':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
