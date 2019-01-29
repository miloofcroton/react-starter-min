import * as types from './types';
import initialState from './state';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ONE_START:
      return { ...state, loading: true };
    case types.FETCH_ONE_DONE:
      return { ...state, loading: false, details: action.payload };
    case types.FETCH_LIST_START:
      return { ...state, loading: true };
    case types.FETCH_LIST_DONE:
      return { ...state, loading: false, list: action.payload };
    case types.LIST_EXISTS:
      return { ...state, loading: false };
    case types.POST_ONE_START:
      return { ...state, sending: true };
    case types.POST_ONE_DONE:
      return { ...state, sending: false, lastSent: action.payload };
    default:
      return state;
  }
}
