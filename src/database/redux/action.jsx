import { fromJS } from 'immutable';

export const redux_action = (name, data, meta = false) => {
  return {
    type: name,
    payload: fromJS(data),
    meta: fromJS(meta),
  };
};
