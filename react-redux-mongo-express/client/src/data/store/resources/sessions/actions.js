import {
  signupRequest,
  signinRequest,
  verifyRequest
} from '../../../services/mongo/users';

export const SESSION_CREATE = 'SESSION_CREATE';
export const SESSION_DELETE = 'SESSION_DELETE';
export const SESSION_LOADING = 'SESSION_LOADING';
export const SESSION_LOADED = 'SESSION_LOADED';
export const SESSION_ERROR = 'SESSION_ERROR';

export const signup = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: signupRequest({ email, password })
});

export const signin = ({ email, password }) => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: signinRequest({ email, password })
});

export const signout = () => ({
  type: SESSION_DELETE
});

export const refreshSession = () => ({
  type: SESSION_CREATE,
  loadStart: SESSION_LOADING,
  loadEnd: SESSION_LOADED,
  errorType: SESSION_ERROR,
  payload: verifyRequest()
});

export const SESSION_TOKEN = 'SESSION_TOKEN';
export const updateSessionToken = token => ({
  type: SESSION_TOKEN,
  payload: token
});
