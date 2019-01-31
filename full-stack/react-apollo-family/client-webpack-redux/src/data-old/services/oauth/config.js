import { WebAuth } from 'auth0-js';

export const auth0 = new WebAuth({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  redirectUri: process.env.AUTH0_REDIRECT,
  audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
  responseType: 'token',
  scope: 'openid profile create:current_user_metadata read:current_user update:current_user_metadata'
});
