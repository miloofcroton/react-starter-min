export const UPDATE_SESSION_TOKEN = 'UPDATE_SESSION_TOKEN';
export const updateSessionToken = sessionToken => ({
  type: UPDATE_SESSION_TOKEN,
  payload: sessionToken
});

export const UPDATE_SESSION_USER = 'UPDATE_SESSION_USER';
export const updateSessionProfile = (user, management) => ({
  type: UPDATE_SESSION_USER,
  user,
  management
});
