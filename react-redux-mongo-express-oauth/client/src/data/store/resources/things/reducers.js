import {
  FETCH_THINGS_LOADING,
  FETCH_THINGS_DONE,
  FETCH_THINGS,
  FETCH_THING_LOADING,
  FETCH_THING_DONE,
  FETCH_THING
} from './actions';

const initialState = {
  loading: false,
  list: [],
  details: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_THINGS_LOADING:
      return { ...state, loading: true };
    case FETCH_THINGS_DONE:
      return { ...state, loading: false };
    case FETCH_THINGS:
      return { ...state, list: payload };
    case FETCH_THING_LOADING:
      return { ...state, loading: true };
    case FETCH_THING_DONE:
      return { ...state, loading: false };
    case FETCH_THING:
      return { ...state, details: payload };
    default:
      return state;
  }
}
