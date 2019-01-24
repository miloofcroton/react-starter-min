import { combineReducers } from 'redux';
import { reducer as formsReducer } from 'redux-form';
import sessionsReducer from './sessions/reducers';
import itemsReducer from './items/reducers';
import thingsReducer from './things/reducers';

export const rootReducer = combineReducers({
  form: formsReducer,
  session: sessionsReducer,
  items: itemsReducer,
  things: thingsReducer,
});


import { combineEpics } from 'redux-observable';
import * as itemsEpics from './items/epics';
import * as thingsEpics from './things/epics';
import * as sessionsEpics from './sessions/epics';

export const rootEpic = combineEpics(
  ...Object.values(itemsEpics),
  ...Object.values(thingsEpics),
  ...Object.values(sessionsEpics),
);
