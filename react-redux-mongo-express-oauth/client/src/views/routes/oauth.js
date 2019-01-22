import { Callback, SignupWithRouter, LoginWithRouter } from '../lib/oauth/Auth';

export const OAUTH_ROUTES = {
  SIGNUP: {
    path: '/oauth/signup',
    Component: SignupWithRouter,
    linkTo: () => '/oauth/signup'
  },
  LOGIN: {
    path: '/oauth/login',
    Component: LoginWithRouter,
    linkTo: () => '/oauth/login'
  },
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
};
