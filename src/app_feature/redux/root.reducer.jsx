import { combineReducers } from 'redux';
import { h5_data_reducer } from './renducer/h5_data.renducer';
import { shareMsg_reducer } from './renducer/shareMsg.renducer';
import { release_reducer } from './renducer/release.renducer';
import { sid_reducer } from './renducer/sid.renducer';
import { editor_ui_reducer } from './renducer/editor_ui.renducer';
import { bg_ui_reducer } from './renducer/bg_ui.renducer';

export const rootReducer = combineReducers({
  sid_reducer,
  h5_data_reducer,
  shareMsg_reducer,
  release_reducer,
  editor_ui_reducer,
  bg_ui_reducer,
});
