import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './_root_reducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
