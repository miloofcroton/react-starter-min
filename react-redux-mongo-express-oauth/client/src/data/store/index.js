import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './resources';
import { rootEpic } from './observables';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const middleware = [
  epicMiddleware,
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [
  applyMiddleware(...middleware),
];

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
