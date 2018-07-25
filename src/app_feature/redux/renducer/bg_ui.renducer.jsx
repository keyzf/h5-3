import { $$background_database } from '../../../ui/background/background.database';

const data = { data: $$background_database };
export const bg_ui_reducer = (state = { ...data }, action) => {
  switch (action.type) {
    case 'BG_UI':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
