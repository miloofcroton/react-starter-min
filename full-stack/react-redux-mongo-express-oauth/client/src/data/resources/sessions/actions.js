import * as types from './types';

export const signUp = () => ({
  type: types.SIGN_UP,
});

export const signIn = () => ({
  type: types.SIGN_IN,
});

export const signOut = () => ({
  type: types.SIGN_OUT,
});

export const handleAuth = () => ({
  type: types.HANDLE_AUTH,
});

export const updateToken = sessionToken => ({
  type: types.UPDATE_TOKEN,
  payload: sessionToken,
});

export const getProfile = sessionToken => ({
  type: types.GET_PROFILE,
  sessionToken: sessionToken,
});

export const updateProfile = (user, management) => ({
  type: types.UPDATE_PROFILE,
  user: user,
  management: management,
});

export const setSession = () => ({
  type: types.SET_SESSION,
});

export const updateMetadata = () => ({
  type: types.UPDATE_METADATA,
});
