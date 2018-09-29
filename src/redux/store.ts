import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore } from 'redux';
import { RxBg } from './reducer/bg';
import { RxRelease } from './reducer/release';
import { RxPreview } from './reducer/preview';
import { RxEditor } from './reducer/editor';
import { RxUi } from './reducer/ui';

const renducer = combineReducers({
  RxUi,
  RxBg,
  RxEditor,
  RxPreview,
  RxRelease,
});

const store = createStore(renducer, composeWithDevTools());

export { store };
