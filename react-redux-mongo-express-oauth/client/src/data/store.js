import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootEpic } from './resources';
import { createEpicMiddleware } from 'redux-observable';
import composeEnhancers from './middleware/reduxDevTools';

const epicMiddleware = createEpicMiddleware();

const middleware = [
  epicMiddleware,
];

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
