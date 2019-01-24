// redux-observable and rxjs stuff
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

// redux-form for posting with form data
import { getFormValues } from 'redux-form';

// action types to listen for
import {
  FETCH_THINGS_START,
  FETCH_THING_START,
  POST_THING_START,
} from '../resources/things/actions';
// action creators to call after
import {
  fetchThingsDone,
  fetchThingDone,
  postThingDone,
} from '../resources/things/actions';

import { getSessionToken } from '../resources/sessions/selectors';

const fetchThingsEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_THINGS_START),
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
      map(({ response }) => fetchThingsDone(response))
    )
  )
);

const fetchThingEpic = (action$, state$) => action$.pipe(
  ofType(FETCH_THING_START),
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
      map(({ response }) => fetchThingDone(response))
    )
  )
);

const postThingEpic = (action$, state$) => action$.pipe(
  ofType(POST_THING_START),
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
      map(({ response }) => postThingDone(response))
    )
  )
);

const thingsEpics = [
  fetchThingsEpic,
  fetchThingEpic,
  postThingEpic,
];

export default thingsEpics;
