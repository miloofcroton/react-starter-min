import { combineReducers } from 'redux';
import sessionsReducer from './sessions/reducers';
import itemsReducer from './items/reducers';

export const combinedReducers = combineReducers({
  session: sessionsReducer,
  items: itemsReducer
});
