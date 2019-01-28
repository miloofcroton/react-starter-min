import * as types from './types';

export const fetchListStart = () => ({
  type: types.FETCH_LIST_START,
});
export const fetchListDone = items => ({
  type: types.FETCH_LIST_DONE,
  payload: items,
});
export const listExists = () => ({
  type: types.LIST_EXISTS,
});

export const fetchOneStart = id => ({
  type: types.FETCH_ONE_START,
  payload: id,
});
export const fetchOneDone = item => ({
  type: types.FETCH_ONE_DONE,
  payload: item,
});

export const postOneStart = () => ({
  type: types.POST_ONE_START
});
export const postOneDone = item => ({
  type: types.POST_ONE_DONE,
  payload: item,
});
