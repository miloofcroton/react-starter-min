import { createStore, compose, applyMiddleware } from 'redux';

import { rootReducer, rootEpic } from './resources';

import { promiseRunner } from './middleware/promise';

import { createEpicMiddleware } from 'redux-observable';
const epicMiddleware = createEpicMiddleware();

const middleware = [
  promiseRunner,
  epicMiddleware,
];

const enhancers = [
  applyMiddleware(...middleware),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootEnhancer = composeEnhancers(
  ...enhancers
);


const configureStore = () => {
  const store = createStore(
    rootReducer,
    rootEnhancer,
  );

  epicMiddleware.run(rootEpic);

  return store;
};

export default configureStore;
