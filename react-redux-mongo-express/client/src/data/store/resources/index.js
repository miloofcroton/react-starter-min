import { combineReducers } from 'redux';
import usersReducer from './users/reducers';
import itemsReducer from './items/reducers';

export const combinedReducers = combineReducers({
  users: usersReducer,
  items: itemsReducer
});
