import * as types from './types';

export const updateSessionToken = sessionToken => ({
  type: types.SESSION_UPDATE_TOKEN,
  payload: sessionToken,
});

export const updateSessionProfile = (user, management) => ({
  type: types.SESSION_UPDATE_PROFILE,
  user: user,
  management: management,
});

export const signUp = () => ({
  type: types.SIGN_UP,
});

export const signIn = () => ({
  type: types.SIGN_IN,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});
