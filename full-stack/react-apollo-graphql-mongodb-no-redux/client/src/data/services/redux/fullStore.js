import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createRootReducer } from '../../resources';
import { createRootEnhancer } from './middleware';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../../resources';

export const history = createBrowserHistory();

const epicMiddleware = createEpicMiddleware();

const middleware = [
  epicMiddleware,
  routerMiddleware(history),
];

const enhancers = [
  applyMiddleware(...middleware),
];

export const configureStore = preloadedState => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    createRootEnhancer(enhancers),
  );

  epicMiddleware.run(rootEpic);

  return store;
};
