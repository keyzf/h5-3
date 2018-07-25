import { fromJS } from 'immutable';

const redux_action = (name, data, meta = false) => {
  return {
    type: name,
    payload: fromJS(data),
    meta: fromJS(meta),
  };
};

export { redux_action };
