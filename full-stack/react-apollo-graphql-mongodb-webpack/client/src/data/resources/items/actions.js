import * as types from './types';
import * as effects from './effects';

export const updateList = items => ({
  type: types.UPDATE_LIST,
  payload: effects.listWithJoke(items)
});
