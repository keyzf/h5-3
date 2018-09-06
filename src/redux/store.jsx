import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { renducer } from './renducer';

const store = createStore(
  renducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export { store };
