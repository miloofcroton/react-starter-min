import Items from '../content/items';

export const SECTIONS_ROUTES = {
  ITEMS: {
    Component: Items,
    path: '/items',
    linkTo: () => '/items',
    nav: true,
    order: 3,
    label: 'Items',
  },
};
