import { combineReducers } from 'redux';
import itemsReducer from './items/reducers';

export const createRootReducer = () => combineReducers({
  items: itemsReducer,
});


// import { combineEpics } from 'redux-observable';
// import { itemsEpics } from './items/epics';

// export const rootEpic = combineEpics(
//   ...itemsEpics,
// );
