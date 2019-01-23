// redux-observable and rxjs stuff
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

// action types to listen for
import {
  FETCH_ITEMS_START,
  FETCH_ITEM_START,
  POST_ITEM_START,
} from '../resources/items/actions';
// action creators to call after
import {
  fetchItemsDone,
  fetchItemDone,
  postItemDone,
} from '../resources/items/actions';

export const fetchItemsEpic = action$ => action$.pipe(
  ofType(FETCH_ITEMS_START),
  mergeMap(() =>
    ajax({
      method: 'GET',
      url: '/api/items',
      responseType: 'json'
    }).pipe(
      map(({ response }) => fetchItemsDone(response))
    )
  )
);

export const fetchItemEpic = action$ => action$.pipe(
  ofType(FETCH_ITEM_START),
  mergeMap(action =>
    ajax({
      method: 'GET',
      url: `/api/items${action.payload}`,
      responseType: 'json'
    }).pipe(
      map(({ response }) => fetchItemDone(response))
    )
  )
);

import { getFormValues } from 'redux-form';

export const postItemEpic = (action$, state$) => action$.pipe(
  ofType(POST_ITEM_START),
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
      map(({ response }) => postItemDone(response))
    )
  )
);

const itemEpics = [
  fetchItemsEpic,
  fetchItemEpic,
  postItemEpic,
];

export default itemEpics;
