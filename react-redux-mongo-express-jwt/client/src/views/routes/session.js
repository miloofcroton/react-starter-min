import { SignUp, SignIn } from '../lib/session/New';

export const SESSION_ROUTES = {
  SIGN_UP: {
    path: '/signup',
    Component: SignUp,
    linkTo: () => '/signup'
  },
  SIGN_IN: {
    path: '/signin',
    Component: SignIn,
    linkTo: () => '/signin'
  },
};
