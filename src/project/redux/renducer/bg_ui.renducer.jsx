import { $$background_database } from '../../../ui/background/background.database';

const data = { data: $$background_database };
const bg_ui_reducer = (state = { ...data }, action) => {
  switch (action.type) {
    case 'BG_UI':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};

export { bg_ui_reducer };
