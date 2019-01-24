// redux-observable and rxjs stuff
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

// redux-form for posting with form data
import { getFormValues } from 'redux-form';

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

const fetchItemsEpic = action$ => action$.pipe(
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

const fetchItemEpic = action$ => action$.pipe(
  ofType(FETCH_ITEM_START),
  mergeMap(action =>
    ajax({
      method: 'GET',
      url: `/api/items/${action.payload}`,
      responseType: 'json'
    }).pipe(
      map(({ response }) => fetchItemDone(response))
    )
  )
);

const postItemEpic = (action$, state$) => action$.pipe(
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

const itemsEpics = [
  fetchItemsEpic,
  fetchItemEpic,
  postItemEpic,
];

export default itemsEpics;
