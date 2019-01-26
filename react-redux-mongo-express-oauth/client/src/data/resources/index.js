import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formsReducer } from 'redux-form';
import sessionsReducer from './sessions/reducers';
import itemsReducer from './items/reducers';
import thingsReducer from './things/reducers';

export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  form: formsReducer,
  session: sessionsReducer,
  items: itemsReducer,
  things: thingsReducer,
});


import { combineEpics } from 'redux-observable';
import { itemsEpics } from './items/epics';
import { thingsEpics } from './things/epics';
import { sessionsEpics } from './sessions/epics';

export const rootEpic = combineEpics(
  ...itemsEpics,
  ...thingsEpics,
  ...sessionsEpics,
);
