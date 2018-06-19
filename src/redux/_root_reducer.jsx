import { combineReducers } from 'redux';
import { select_reducer, bg_reducer, visual_ui_show_reducer } from './reducer';
import { choose_reducer } from './reducer';
import { up_img_reducer } from './reducer';
import { html5_reducer } from './reducer';

export const rootReducer = combineReducers({
  select_reducer,
  choose_reducer,
  bg_reducer,
  up_img_reducer,
  html5_reducer,
  visual_ui_show_reducer,
});
