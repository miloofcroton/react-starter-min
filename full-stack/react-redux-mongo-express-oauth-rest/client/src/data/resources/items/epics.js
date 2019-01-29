import { ofType } from 'redux-observable';

import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

import { getItemsForm } from '../forms/selectors';
import { getItems } from './selectors';
import * as types from './types';
import * as items from './actions';

const fetchItems = (action$, state$) => action$.pipe(
  ofType(types.FETCH_LIST_START),
  mergeMap(() => {
    if (!getItems(state$.value).length) {
      return ajax({
        method: 'GET',
        url: '/api/items',
        responseType: 'json'
      }).pipe(
        map(({ response }) => items.fetchListDone(response))
      );
    }
    else return of(items.listExists());
  })
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
      body: getItemsForm(state$.value),
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
