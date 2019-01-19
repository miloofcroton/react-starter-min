import NewSession from '../lib/session/New';

export const AUTH_ROUTES = {
  SIGNUP: {
    path: '/signup',
    Component: NewSession,
    linkTo: () => '/signup'
  },
  LOGIN: {
    path: '/login',
    Component: NewSession,
    linkTo: () => '/login'
  },
};
