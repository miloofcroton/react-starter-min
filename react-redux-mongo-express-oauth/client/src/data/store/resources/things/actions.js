// Fetch things
export const FETCH_THINGS_START = 'FETCH_THINGS_START';
export const FETCH_THINGS_DONE = 'FETCH_THINGS_DONE';
export const fetchThingsStart = () => ({
  type: FETCH_THINGS_START
});
export const fetchThingsDone = things => ({
  type: FETCH_THINGS_DONE,
  payload: things,
});

// Fetch thing
export const FETCH_THING_START = 'FETCH_THING_START';
export const FETCH_THING_DONE = 'FETCH_THING_DONE';
export const fetchThingStart = id => ({
  type: FETCH_THING_START,
  payload: id,
});
export const fetchThingDone = thing => ({
  type: FETCH_THING_DONE,
  payload: thing,
});

// Post thing
export const POST_THING_START = 'POST_THING_START';
export const POST_THING_DONE = 'POST_THING_DONE';
export const postThingStart = () => ({
  type: POST_THING_START
});
export const postThingDone = thing => ({
  type: POST_THING_DONE,
  payload: thing,
});
