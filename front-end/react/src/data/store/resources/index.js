import { combineReducers } from 'redux';
import { reducer as projectsReducer } from './projects/reducers';

export const combinedReducers = combineReducers({
  projects: projectsReducer
});
