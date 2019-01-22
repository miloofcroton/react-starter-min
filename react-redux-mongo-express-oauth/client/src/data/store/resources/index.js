import { combineReducers } from 'redux';
import sessionsReducer from './sessions/reducers';
import oauthReducer from './oauth/reducers';
import itemsReducer from './items/reducers';
import thingsReducer from './things/reducers';

export const combinedReducers = combineReducers({
  session: sessionsReducer,
  oauth: oauthReducer,
  items: itemsReducer,
  things: thingsReducer,
});
