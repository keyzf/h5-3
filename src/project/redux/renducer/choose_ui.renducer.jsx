import { fromJS } from 'immutable';

const data = fromJS({ name: '', menuChoose: '' });
const choose_ui_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case 'CHOOSE_UI':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export { choose_ui_reducer };
