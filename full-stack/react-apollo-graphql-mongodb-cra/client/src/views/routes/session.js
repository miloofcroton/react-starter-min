import SignIn from '../lib/session/SignIn';
import SignUp from '../lib/session/SignUp';
import SignOut from '../lib/session/SignOut';

export const SESSION_ROUTES = {
  SIGN_UP: {
    path: '/signup',
    Component: SignUp,
    linkTo: () => '/signup',
    refetch: true,
  },
  SIGN_IN: {
    path: '/signin',
    Component: SignIn,
    linkTo: () => '/signin',
    refetch: true,
  },
  SIGN_OUT: {
    path: '/signout',
    Component: SignOut,
    linkTo: () => '/signin',
    refetch: true,
  },
};
