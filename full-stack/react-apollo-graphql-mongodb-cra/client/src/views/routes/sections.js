// import Items from '../content/items';
// import Things from '../content/things';

// import CheckSession from '../lib/session/Check';

import Landing from '../content/Landing';
import Account from '../content/Account';
import Admin from '../content/Admin';

export const SECTIONS_ROUTES = {
  LANDING: {
    Component: Landing,
    path: '/landing',
    linkTo: () => '/landing',
    nav: true,
    order: 3,
    label: 'Landing',
  },
  ACCOUNT: {
    Component: Account,
    path: '/account',
    linkTo: () => '/account',
  },
  ADMIN: {
    Component: Admin,
    path: '/admin',
    linkTo: () => '/admin',
  },
  // ITEMS: {
  //   Component: Items,
  //   path: '/items',
  //   linkTo: () => '/items',
  //   nav: true,
  //   order: 3,
  //   label: 'Items',
  // },
  // THINGS: {
  //   Component: CheckSession(Things),
  //   path: '/things',
  //   linkTo: () => '/things',
  //   nav: true,
  //   order: 4,
  //   label: 'Things',
  // },
};
