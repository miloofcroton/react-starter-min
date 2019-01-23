export const thunk = store => next => action => {

  const { dispatch, getState } = store;

  if (typeof action === 'function') {
    action(dispatch, getState);
  } else {
    return next(action);
  }
};
