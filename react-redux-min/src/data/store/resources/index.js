import { combineReducers } from 'redux';
import { reducer as itemsReducer } from './items/reducers';

export const combinedReducers = combineReducers({
  items: itemsReducer
});
