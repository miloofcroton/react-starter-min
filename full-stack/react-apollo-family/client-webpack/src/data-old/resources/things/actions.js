import * as types from './types';

export const fetchListStart = () => ({
  type: types.FETCH_LIST_START
});
export const fetchListDone = things => ({
  type: types.FETCH_LIST_DONE,
  payload: things,
});

export const fetchOneStart = id => ({
  type: types.FETCH_ONE_START,
  payload: id,
});
export const fetchOneDone = thing => ({
  type: types.FETCH_ONE_DONE,
  payload: thing,
});

export const postOneStart = () => ({
  type: types.POST_ONE_START
});
export const postOneDone = thing => ({
  type: types.POST_ONE_DONE,
  payload: thing,
});
