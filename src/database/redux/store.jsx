import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { renducer } from './renducer';

const store = createStore(renducer, applyMiddleware(thunk));

export { store };
