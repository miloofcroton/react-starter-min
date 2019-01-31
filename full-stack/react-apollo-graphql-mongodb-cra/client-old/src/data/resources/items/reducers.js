import * as types from './types';
import initialState from './state';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
