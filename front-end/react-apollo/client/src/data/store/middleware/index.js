import { applyMiddleware, compose } from 'redux';
import { promiseRunner } from './promise';
import chromeExtension from './chromeExtension';

const middleware = [
  promiseRunner
];

const enhancers = [
  applyMiddleware(...middleware),
];

chromeExtension(enhancers);

export const composedEnhancers = compose(
  ...enhancers
);
