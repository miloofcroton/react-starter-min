import { auth0 } from '../../services/oauth/config';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as types from './types';
import * as sessions from './actions';
import { getSignupForm } from '../forms/selectors';


const signIn = action$ => action$.pipe(
  ofType(types.SIGN_IN),
  mergeMap(() => {
    return new Promise((resolve, reject) => {
      auth0.authorize(
        err => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }),
  filter(Boolean),
);

const signOut = action$ => action$.pipe(
  ofType(types.SIGN_OUT),
  mergeMap(() => {
    window.localStorage.removeItem('isSignedIn');
    return new Promise((resolve, reject) => {
      // fix this in production
      // see: https://auth0.github.io/auth0.js/global.html#logout
      auth0.logout({
        clientID: process.env.AUTH0_CLIENT_ID,
        returnTo: 'http://localhost:8080',
      });
    });
  }),
  filter(Boolean),
);

const signUp = (action$, state$) => action$.pipe(
  ofType(types.SIGN_UP),
  mergeMap(() => {
    const { email, password, name, photo } = getSignupForm(state$.value);
    return new Promise((resolve, reject) => {
      auth0.signup(
        {
          connection: 'Username-Password-Authentication',
          email,
          password,
          username: email,
          user_metadata: {
            name,
            photo
          }
        },
        err => {
          if (err) return reject(err);
          resolve();
        }
      );
    });
  }),
  filter(Boolean),
);

export const sessionsEpics = [
  signIn,
  signOut,
  signUp,
];
