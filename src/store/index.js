import { createStore, compose } from 'redux';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducers = (state) => state;

export const store = createStore(reducers, {}, composeEnhancers());
