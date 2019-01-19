import store from '../../store';
import { updateSessionToken } from '../../store/resources/sessions/actions';

let token = window.localStorage.getItem('token');

const setToken = newToken => {
  token = newToken;
  store.dispatch(updateSessionToken(newToken));
  window.localStorage.setItem('token', newToken);
};

export const request = (url, method, body) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(res => [res.ok, res.headers, res.json()])
    .then(([ok, headers, json]) => {
      if (!ok) throw new Error('Failed request');
      return [headers, json];
    })
    .then(([headers, json]) => {
      const newToken = headers.get('X-AUTH-TOKEN');
      if (newToken && newToken !== token) setToken(newToken);
      return json;
    });
};

export const get = url => request(url, 'GET');

export const post = (url, body) => request(url, 'POST', body);
