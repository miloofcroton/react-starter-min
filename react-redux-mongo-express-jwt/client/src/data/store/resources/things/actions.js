import { getThings, getThing, createThing } from '../../../services/mongo/things';

export const FETCH_THINGS = 'FETCH_THINGS';
export const FETCH_THINGS_LOADING = 'FETCH_THINGS_START';
export const FETCH_THINGS_DONE = 'FETCH_THINGS_DONE';
export const fetchThings = () => ({
  type: FETCH_THINGS,
  loadStart: FETCH_THINGS_LOADING,
  loadEnd: FETCH_THINGS_DONE,
  payload: getThings()
});

export const FETCH_THING = 'FETCH_THING';
export const FETCH_THING_LOADING = 'FETCH_THING_START';
export const FETCH_THING_DONE = 'FETCH_THING_DONE';
export const fetchThing = id => ({
  type: FETCH_THING,
  loadStart: FETCH_THING_LOADING,
  loadEnd: FETCH_THING_DONE,
  payload: getThing(id)
});

export const POST_THING = 'POST_THING';
export const postThing = thing => ({
  type: POST_THING,
  payload: createThing(thing)
});
