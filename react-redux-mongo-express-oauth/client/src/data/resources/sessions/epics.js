import { ofType } from 'redux-observable';
// import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
// import { getFormValues } from 'redux-form';

import { auth0 } from '../../services/oauth/config';


import * as types from './types';
import * as items from './actions';

export const signInEpic = action$ => action$.pipe(
  ofType(types.SIGN_IN_START),
  mergeMap(() => auth0.authorize())
);
