import { CORE_ROUTES } from './core';
import { SECTIONS_ROUTES } from './sections';
import { AUTH_ROUTES } from './auth';

export const ROUTES = {
  ...CORE_ROUTES,
  ...AUTH_ROUTES,
  ...SECTIONS_ROUTES,
};
