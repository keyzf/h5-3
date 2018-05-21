import { combineReducers } from 'redux';
import { select_reducer, bg_reducer } from './reducer';
import { choose_reducer } from './reducer';

export const rootReducer = combineReducers({
  select_reducer,
  choose_reducer,
  bg_reducer,
});
