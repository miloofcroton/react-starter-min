import { Login, Callback, SignupWithRouter } from '../lib/oauth/Auth';

export const OAUTH_ROUTES = {
  SIGNUP: {
    path: '/oauth/signup',
    Component: SignupWithRouter,
    linkTo: () => '/oauth/signup'
  },
  // LOGIN: {
  //   path: '/oauth/login',
  //   Component: Login,
  //   linkTo: () => '/oauth/login'
  // },
  CALLBACK: {
    path: '/oauth/callback',
    Component: Callback,
    linkTo: () => '/oauth/callback'
  },
};
