import { combineReducers } from 'redux';
import routerReducerCreator from './router/reducers';
import formsReducer from './forms/reducers';
import sessionsReducer from './sessions/reducers';
import itemsReducer from './items/reducers';
import thingsReducer from './things/reducers';

export const createRootReducer = history => combineReducers({
  router: routerReducerCreator(history),
  form: formsReducer,
  session: sessionsReducer,
  items: itemsReducer,
  things: thingsReducer,
});


import { combineEpics } from 'redux-observable';
import { itemsEpics } from './items/epics';
import { thingsEpics } from './things/epics';
import { sessionsEpics } from './sessions/epics';
import { routerEpics } from './router/epics';

export const rootEpic = combineEpics(
  ...itemsEpics,
  ...thingsEpics,
  ...sessionsEpics,
  ...routerEpics,
);
