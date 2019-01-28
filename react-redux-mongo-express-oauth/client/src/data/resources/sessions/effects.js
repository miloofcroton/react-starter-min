import { Management } from 'auth0-js';
import { auth0 } from '../../services/oauth/config';
import { store } from '../../../index';
import { updateSessionToken, updateSessionProfile } from './actions';
import { getSessionToken } from './selectors';

// https://auth0.com/docs/quickstart/spa/react

export const signup = (email, password, name, photo) => {
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
};

// export const signin = () => auth0.authorize();

export const signout = () => {
  window.localStorage.removeItem('isSignedIn');
  auth0.logout();
};

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((err, authResult) => {
      if (err) return reject(err);

      if (authResult && authResult.accessToken) {
        store.dispatch(updateSessionToken(authResult.accessToken));
        getProfile(authResult.accessToken);
        return resolve(authResult.accessToken);
      }

      resolve(getSessionToken(store.getState()));
    });
  });
};

export const getProfile = (sessionToken) => {
  if (!sessionToken) return Promise.reject('No session token in store');

  return new Promise((resolve, reject) => {
    const management = new Management({
      domain: process.env.AUTH0_DOMAIN,
      token: sessionToken
    });

    auth0.client.userInfo(sessionToken, (err, profile) => {
      if (err) return reject(err);
      management.getUser(profile.sub, (err, user) => {
        if (err) return reject(err);
        store.dispatch(updateSessionProfile(user, management));
        resolve(user);
      });
    });
  });
};

export const updateMetadata = metadata => {
  const { user, management } = store.getState().session;
  management.patchUserMetadata(user.user_id, metadata, (err, profile) => {
    console.log(profile);
  });
};


const setSession = authResult => {
  // Set isSignedIn flag in localStorage
  window.localStorage.setItem('isSignedIn', 'true');
};
