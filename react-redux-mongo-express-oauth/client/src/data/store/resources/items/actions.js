import { store } from '../../../../index';
import { getFormValues } from 'redux-form';
import { getItems, getItem, createItem } from '../../../services/mongo/items';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const FETCH_ITEMS_LOADING = 'FETCH_ITEMS_START';
export const FETCH_ITEMS_DONE = 'FETCH_ITEMS_DONE';
export const fetchItems = () => ({
  type: FETCH_ITEMS,
  loadStart: FETCH_ITEMS_LOADING,
  loadEnd: FETCH_ITEMS_DONE,
  payload: getItems(),
});

export const FETCH_ITEM = 'FETCH_ITEM';
export const FETCH_ITEM_LOADING = 'FETCH_ITEM_START';
export const FETCH_ITEM_DONE = 'FETCH_ITEM_DONE';
export const fetchItem = id => ({
  type: FETCH_ITEM,
  loadStart: FETCH_ITEM_LOADING,
  loadEnd: FETCH_ITEM_DONE,
  payload: getItem(id),
});

export const POST_ITEM = 'POST_ITEM';
export const postItem = () => {
  const values = getFormValues('items')(store.getState());
  const { title, description } = values;
  return {
    type: POST_ITEM,
    payload: createItem({ title, description }),
  };
};

// new, with observables

import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';


export const FETCH_ITEMS_NEW = 'FETCH_ITEMS_NEW';
export const FETCH_ITEMS_NEW_FULFILLED = 'FETCH_ITEMS_NEW_FULFILLED';
export const fetchItemsNew = () => ({ type: FETCH_ITEMS_NEW });
export const fetchItemsNewFulfilled = payload => ({ type: FETCH_ITEMS_NEW_FULFILLED, payload });

export const fetchItemsEpic = action$ => action$.pipe(
  ofType(FETCH_ITEMS_NEW),
  mergeMap(() =>
    ajax({
      method: 'GET',
      url: '/api/items',
      responseType: 'json'
    }).pipe(
      map(({ response }) => fetchItemsNewFulfilled(response))
    )
  )
);
