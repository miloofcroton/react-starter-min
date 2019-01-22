import { CORE_ROUTES } from './core';
import { SECTIONS_ROUTES } from './sections';
import { OAUTH_ROUTES } from './oauth';
import { SESSION_ROUTES } from './session';

export const ROUTES = {
  ...CORE_ROUTES,
  ...SESSION_ROUTES,
  ...OAUTH_ROUTES,
  ...SECTIONS_ROUTES,
};
