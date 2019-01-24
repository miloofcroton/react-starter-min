import { UPDATE_SESSION_TOKEN, UPDATE_SESSION_USER } from './actions';

const initialState = {
  token: null,
  user: null,
  management: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SESSION_TOKEN:
      return { ...state, token: action.payload };
    case UPDATE_SESSION_USER:
      return { ...state, user: action.user, management: action.management };
    default:
      return state;
  }
}
