import { post, get } from '../lib/authRequests';

const USERS_API = '/api/users';

export const signupRequest = ({ email, password }) => {
  return post(`${USERS_API}/signup`, { email, password });
};

export const loginRequest = ({ email, password }) => {
  return post(`${USERS_API}/login`, { email, password });
};

export const verifyRequest = () => {
  return get(`${USERS_API}/verify`);
};
