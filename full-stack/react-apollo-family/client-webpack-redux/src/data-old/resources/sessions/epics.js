import { auth0 } from '../../services/oauth/config';
import { Management } from 'auth0-js';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, filter, mapTo } from 'rxjs/operators';
import { Observable, of, empty } from 'rxjs';
import * as types from './types';
import * as sessions from './actions';
import { getSessionToken } from './selectors';
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

import { push } from 'connected-react-router';
import { getHash } from '../router/selectors';

import { store } from '../../../index';

const handleAuth = (action$, state$) => action$.pipe(
  ofType(types.HANDLE_AUTH),
  mergeMap(() => {
    return new Promise((resolve, reject) => {
      return auth0.parseHash(
        { hash: getHash(state$.value) },
        (err, authResult) => {
          if (err) return reject(err);

          if (authResult && authResult.accessToken) {
            store.dispatch(sessions.updateToken(authResult.accessToken));
            store.dispatch(sessions.getProfile(authResult.accessToken));
            return resolve(authResult.accessToken);
          }

          return resolve(getSessionToken(state$.value));
        });
    });
  }),
  filter(Boolean),
  mapTo(push('/')),
);

const getProfile = action$ => action$.pipe(
  ofType(types.GET_PROFILE),
  mergeMap(action => {
    const { sessionToken } = action;
    if (!sessionToken) return Promise.reject('No session token in store');

    new Promise((resolve, reject) => {
      const management = new Management({
        domain: process.env.AUTH0_DOMAIN,
        token: sessionToken
      });

      return auth0.client.userInfo(sessionToken, (err, profile) => {
        if (err) return reject(err);
        management.getUser(profile.sub, (err, user) => {
          if (err) return reject(err);
          store.dispatch(sessions.updateProfile(user, management));
          return resolve(user);
        });
      });
    });
    return empty();
  }),
  filter(Boolean),
);

const updateMetadata = (action$, store$) => action$.pipe(
  ofType(types.UPDATE_METADATA),
  mergeMap(action => {
    const { user, management } = store$.value.session;
    const { metadata } = action;
    management.patchUserMetadata(user.user_id, metadata, (err, profile) => {
      console.log(profile);
    });
  }),
  filter(Boolean),
);

const setSession = action$ => action$.pipe(
  ofType(types.SET_SESSION),
  mergeMap(() => {
    // Set isSignedIn flag in localStorage
    window.localStorage.setItem('isSignedIn', 'true');
  }),
  filter(Boolean),
);


export const sessionsEpics = [
  signIn,
  signOut,
  signUp,
  handleAuth,
  getProfile,
  // setSession,
  // updateMetadata,
];
