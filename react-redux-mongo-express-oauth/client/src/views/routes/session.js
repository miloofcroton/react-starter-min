import SignIn from '../lib/session/signin';
import SignUp from '../lib/session/signup';
import Callback from '../lib/session/Callback';

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
  CALLBACK: {
    path: '/callback',
    Component: Callback,
    linkTo: () => '/callback'
  },
};
