import * as types from './types';
import initialState from './state';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SESSION_UPDATE_TOKEN:
      return { ...state, token: action.payload };
    case types.SESSION_UPDATE_PROFILE:
      return { ...state, user: action.user, management: action.management };
    case types.SIGN_IN_START:
      return { ...state };
    default:
      return state;
  }
}
