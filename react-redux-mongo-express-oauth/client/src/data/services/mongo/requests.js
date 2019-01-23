import axios from 'axios';

import { store } from '../../../index';
import { getSessionToken } from '../../store/resources/sessions/selectors';
// import { updateSessionToken } from '../../store/resources/sessions/actions';


// https://auth0.com/docs/quickstart/spa/react/03-calling-an-api

// let token = window.localStorage.getItem('token');

// const setToken = newToken => {
//   token = newToken;
//   store.dispatch(updateSessionToken(newToken));
//   window.localStorage.setItem('token', newToken);
// };

export const request = (url, method, body) => {
  return axios({
    url,
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getSessionToken(store.getState())}`
    },
    data: body
  })
    .then(({ statusText, headers, data }) => {
      if (statusText !== 'OK') throw new Error('Failed request');
      return { headers, data };
    })
    .then(({ headers, data }) => {
      const newToken = headers['X-AUTH-TOKEN'];
      // if (newToken && newToken !== token) setToken(newToken);
      return data;
    });
};

export const get = url => request(url, 'GET');

export const post = (url, body) => request(url, 'POST', body);
