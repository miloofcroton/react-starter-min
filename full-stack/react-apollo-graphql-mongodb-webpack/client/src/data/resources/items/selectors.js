import { createSelector } from 'reselect';

export const getItems = state => state.items.list;

const getFirst = array => array[0];

export const getFirstItem = createSelector(
  [getItems],
  getFirst
);
