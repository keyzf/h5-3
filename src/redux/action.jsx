import { fromJS } from 'immutable';

const redux_action = (name, data) => {
  return {
    type: name,
    payload: fromJS(data),
  };
};

const choose_redux_action = (name, data, meta) => {
  return {
    type: name,
    payload: fromJS(data),
    meta: fromJS(meta),
  };
};

export { redux_action, choose_redux_action };
