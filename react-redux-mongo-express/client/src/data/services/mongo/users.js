import { post, get } from '../lib/authRequests';

const USERS_API = '/api/users';

export const signupRequest = ({ email, password }) => {
  return post(`${USERS_API}/signup`, { email, password });
};

export const signinRequest = ({ email, password }) => {
  return post(`${USERS_API}/signin`, { email, password });
};

export const verifyRequest = () => {
  return get(`${USERS_API}/verify`);
};
