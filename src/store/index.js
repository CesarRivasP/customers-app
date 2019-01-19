import { createStore, compose, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const reducers = (state) => state;

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(promiseMiddleware))
);
