// core pages
import Home from '../content/home';
import About from '../content/about';

// main sections
import Work from '../content/work';
import Play from '../content/play';
import Thoughts from '../content/thoughts';

export const ROUTES = {
  HOME: {
    Component: Home,
    path: '/',
    linkTo: () => '/',
    default: true,
    nav: true,
    order: 1,
    label: 'Home',
  },
  ABOUT: {
    Component: About,
    path: '/about',
    linkTo: () => '/about',
    nav: true,
    order: 2,
    label: 'About',
  },
  WORK: {
    Component: Work,
    path: '/work',
    linkTo: () => '/work',
  },
  PLAY: {
    Component: Play,
    path: '/play',
    linkTo: () => '/play',
  },
  THOUGHTS: {
    Component: Thoughts,
    path: '/thoughts',
    linkTo: () => '/thoughts',
  },
};
