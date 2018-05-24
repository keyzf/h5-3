import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './_root_reducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));
