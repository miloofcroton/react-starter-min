import { combineEpics } from 'redux-observable';
import itemEpics from './items';

export const rootEpic = combineEpics(
  ...itemEpics
);
