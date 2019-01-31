import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import * as types from './types';
import * as things from './actions';
import { getThingsForm } from '../forms/selectors';
import { getSessionToken } from '../sessions/selectors';
import {
  allThings,
  oneThing,
  createThing,
} from './requests';

const fetchThings = (action$, state$) => action$.pipe(
  ofType(types.FETCH_LIST_START),
  mergeMap(() =>
    ajax({
      method: 'POST',
      url: '/graphql?',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`
      },
      responseType: 'json',
      body: allThings(),
    }).pipe(
      map(({ response }) => things.fetchListDone(response.data.things))
    )
  )
);

const fetchThing = (action$, state$) => action$.pipe(
  ofType(types.FETCH_ONE_START),
  mergeMap(action =>
    ajax({
      method: 'POST',
      url: '/graphql?',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`
      },
      responseType: 'json',
      body: oneThing(action.payload),
    }).pipe(
      map(({ response }) => things.fetchOneDone(response.data.thing))
    )
  )
);

const postThing = (action$, state$) => action$.pipe(
  ofType(types.POST_ONE_START),
  mergeMap(() =>
    ajax({
      method: 'POST',
      url: '/graphql?',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getSessionToken(state$.value)}`,
      },
      crossDomain: false,
      responseType: 'json',
      body: createThing(getThingsForm(state$.value)),
    }).pipe(
      map(({ response }) => things.postOneDone(response.data.thing))
    )
  )
);

export const thingsEpics = [
  fetchThings,
  fetchThing,
  postThing,
];
