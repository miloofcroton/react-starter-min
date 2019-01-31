import { CORE_ROUTES } from './core';
import { SECTIONS_ROUTES } from './sections';
import { SESSION_ROUTES } from './session';

export const ROUTES = {
  ...CORE_ROUTES,
  ...SESSION_ROUTES,
  ...SECTIONS_ROUTES,
};

export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const SIGN_OUT = '/signout';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
