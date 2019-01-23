import { createSelector } from 'reselect';

export const getItems = state => state.items.list;

export const getItem = state => state.items.details;

export const isItemsLoading = state => state.items.loading;

const getFirst = array => array[0];

export const getFirstItem = createSelector(
  [getItems],
  getFirst
);
