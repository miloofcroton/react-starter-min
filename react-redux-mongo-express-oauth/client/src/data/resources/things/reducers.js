import {
  FETCH_THING_START,
  FETCH_THING_DONE,
  FETCH_THINGS_START,
  FETCH_THINGS_DONE,
  POST_THING_START,
  POST_THING_DONE,
} from './actions';

const initialState = {
  loading: false,
  sending: false,
  lastSent: {},
  list: [],
  details: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_THING_START:
      return { ...state, loading: true };
    case FETCH_THING_DONE:
      return { ...state, loading: false, details: action.payload };
    case FETCH_THINGS_START:
      return { ...state, loading: true };
    case FETCH_THINGS_DONE:
      return { ...state, loading: false, list: action.payload };
    case POST_THING_START:
      return { ...state, sending: true };
    case POST_THING_DONE:
      return { ...state, sending: false, lastSent: action.payload };
    default:
      return state;
  }
}
