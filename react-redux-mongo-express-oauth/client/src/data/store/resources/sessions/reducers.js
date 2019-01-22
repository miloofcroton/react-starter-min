import {
  SESSION_CREATE,
  SESSION_DELETE,
  SESSION_LOADING,
  SESSION_LOADED,
  SESSION_ERROR,
  SESSION_TOKEN,
} from './actions';

const initialState = {
  token: '',
  user: null,
  loading: true,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SESSION_CREATE:
      return { ...state, user: payload };
    case SESSION_DELETE:
      return { ...initialState };
    case SESSION_LOADING:
      return { ...state, loading: true };
    case SESSION_LOADED:
      return { ...state, loading: false };
    case SESSION_ERROR:
      return { ...state, error: payload };
    case SESSION_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
}
