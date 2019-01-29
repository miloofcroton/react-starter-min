import { ofType } from 'redux-observable';

import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

import { getItemsForm } from '../forms/selectors';
import { getItems } from './selectors';
import * as types from './types';
import * as items from './actions';
import {
  allItems,
  oneItem,
  createItem,
} from './requests';

const fetchItems = (action$, state$) => action$.pipe(
  ofType(types.FETCH_LIST_START),
  mergeMap(() => {
    if (!getItems(state$.value).length) {
      return ajax({
        method: 'POST',
        url: '/graphql?',
        headers: {
          'Content-Type': 'application/json'
        },
        responseType: 'json',
        body: allItems(),
      }).pipe(
        map(({ response }) => items.fetchListDone(response.data.items))
      );
    }
    else return of(items.listExists());
  })
);

const fetchItem = action$ => action$.pipe(
  ofType(types.FETCH_ONE_START),
  mergeMap(action =>
    ajax({
      method: 'POST',
      url: '/graphql?',
      headers: {
        'Content-Type': 'application/json'
      },
      responseType: 'json',
      body: oneItem(action.payload),
    }).pipe(
      map(({ response }) => items.fetchOneDone(response.data.item))
    )
  )
);

const postItem = (action$, state$) => action$.pipe(
  ofType(types.POST_ONE_START),
  mergeMap(() =>
    ajax({
      method: 'POST',
      url: '/graphql?',
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'json',
      body: createItem(getItemsForm(state$.value)),
    }).pipe(
      map(({ response }) => items.postOneDone(response.data.item))
    )
  )
);

export const itemsEpics = [
  fetchItems,
  fetchItem,
  postItem,
];
