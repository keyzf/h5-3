import { $$bg_db } from '../../bg.db';

export const bgUi_rdc = (state = { data: $$bg_db }, action) => {
  switch (action.type) {
    case 'BG_UI':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
