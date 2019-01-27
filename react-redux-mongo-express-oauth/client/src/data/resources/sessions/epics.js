import { auth0 } from '../../services/oauth/config';
import { ofType } from 'redux-observable';
// import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import * as types from './types';
import * as items from './actions';

const signIn = action$ => action$.pipe(
  // ofType("@@INIT"),
  ofType(types.SIGN_IN_START),
  map(() => auth0.authorize())
);

export const sessionsEpics = [
  signIn,
];
