import Items from '../content/items';

import Check from '../lib/session/Check';

export const SECTIONS_ROUTES = {
  ITEMS: {
    Component: Items,
    path: '/items',
    linkTo: () => '/items',
    nav: true,
    order: 3,
    label: 'Items',
  },
  ITEMS_SECURE: {
    Component: Check(Items),
    path: '/items/secure',
    linkTo: () => '/items/secure',
    nav: true,
    order: 4,
    label: 'Items Secure',
  },
};
