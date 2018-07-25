import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './root.reducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
