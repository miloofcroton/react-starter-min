import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { getFormValues } from 'redux-form';

import * as types from './types';
import * as things from './actions';

import { getSessionToken } from '../sessions/selectors';

export const fetchThingsEpic = (action$, state$) => action$.pipe(
  ofType(types.FETCH_LIST_START),
  mergeMap(() =>
    ajax({
      method: 'GET',
      url: '/api/things',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`
      },
      responseType: 'json',
    }).pipe(
      map(({ response }) => things.fetchListDone(response))
    )
  )
);

export const fetchThingEpic = (action$, state$) => action$.pipe(
  ofType(types.FETCH_ONE_START),
  mergeMap(action =>
    ajax({
      method: 'GET',
      url: `/api/things/${action.payload}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`
      },
      responseType: 'json',
    }).pipe(
      map(({ response }) => things.fetchOneDone(response))
    )
  )
);

export const postThingEpic = (action$, state$) => action$.pipe(
  ofType(types.POST_ONE_START),
  mergeMap(() =>
    ajax({
      method: 'POST',
      url: '/api/things',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`,
      },
      crossDomain: false,
      responseType: 'json',
      body: getFormValues('things')(state$.value),
    }).pipe(
      map(({ response }) => things.postOneDone(response))
    )
  )
);
