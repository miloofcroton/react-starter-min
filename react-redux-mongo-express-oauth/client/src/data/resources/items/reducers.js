import {
  FETCH_ITEM_START,
  FETCH_ITEM_DONE,
  FETCH_ITEMS_START,
  FETCH_ITEMS_DONE,
  POST_ITEM_START,
  POST_ITEM_DONE,
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
    case FETCH_ITEM_START:
      return { ...state, loading: true };
    case FETCH_ITEM_DONE:
      return { ...state, loading: false, details: action.payload };
    case FETCH_ITEMS_START:
      return { ...state, loading: true };
    case FETCH_ITEMS_DONE:
      return { ...state, loading: false, list: action.payload };
    case POST_ITEM_START:
      return { ...state, sending: true };
    case POST_ITEM_DONE:
      return { ...state, sending: false, lastSent: action.payload };
    default:
      return state;
  }
}
