import { createStore } from 'redux';

import { rootReducer } from './resources';
import { rootEnhancer } from './middleware';

const store = createStore(
  rootReducer,
  rootEnhancer
);

export default store;
