import { Map } from 'immutable';

const choose_data = {
  data: Map(),
  meta: Map({ content: false, choose: false }),
};

export const editorUi_rdc = (state = { ...choose_data }, action) => {
  switch (action.type) {
    case 'EDITOR_UI':
      return {
        data: action.payload,
        meta: action.meta,
      };
    default:
      return state;
  }
};
