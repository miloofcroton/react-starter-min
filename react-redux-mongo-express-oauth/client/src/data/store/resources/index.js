import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sessionsReducer from './sessions/reducers';
import itemsReducer from './items/reducers';
import thingsReducer from './things/reducers';

export const rootReducer = combineReducers({
  form: formReducer,
  session: sessionsReducer,
  items: itemsReducer,
  things: thingsReducer,
});
