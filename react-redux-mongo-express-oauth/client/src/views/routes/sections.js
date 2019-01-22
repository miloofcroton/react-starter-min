import Items from '../content/items';
import Things from '../content/things';

import Check from '../lib/session/Check';
import { withAuth } from '../lib/oauth/withAuth';

export const SECTIONS_ROUTES = {
  ITEMS: {
    Component: withAuth(Items),
    path: '/items',
    linkTo: () => '/items',
    nav: true,
    order: 3,
    label: 'Items',
  },
  THINGS: {
    Component: Check(Things),
    path: '/things',
    linkTo: () => '/things',
    nav: true,
    order: 4,
    label: 'Things',
  },
};
