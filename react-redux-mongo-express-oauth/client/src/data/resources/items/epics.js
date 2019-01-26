import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { getFormValues } from 'redux-form';

import * as types from './types';
import * as items from './actions';

const fetchItems = action$ => action$.pipe(
  ofType(types.FETCH_LIST_START),
  mergeMap(() =>
    ajax({
      method: 'GET',
      url: '/api/items',
      responseType: 'json'
    }).pipe(
      map(({ response }) => items.fetchListDone(response))
    )
  )
);

const fetchItem = action$ => action$.pipe(
  ofType(types.FETCH_ONE_START),
  mergeMap(action =>
    ajax({
      method: 'GET',
      url: `/api/items/${action.payload}`,
      responseType: 'json'
    }).pipe(
      map(({ response }) => items.fetchOneDone(response))
    )
  )
);

const postItem = (action$, state$) => action$.pipe(
  ofType(types.POST_ONE_START),
  mergeMap(() =>
    ajax({
      method: 'POST',
      url: '/api/items',
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
      body: getFormValues('items')(state$.value),
    }).pipe(
      map(({ response }) => items.postOneDone(response))
    )
  )
);

export const itemsEpics = [
  fetchItems,
  fetchItem,
  postItem
];
