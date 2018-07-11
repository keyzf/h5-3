import { fromJS } from 'immutable';

const data = fromJS({ sid: null });
const sid_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case 'SID':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export { sid_reducer };
