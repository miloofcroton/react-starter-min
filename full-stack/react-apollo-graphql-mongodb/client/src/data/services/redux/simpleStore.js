import { createStore, applyMiddleware } from 'redux';
import { createRootReducer } from '../../resources';
import { createRootEnhancer } from './middleware';


const middleware = [

];

const enhancers = [
  applyMiddleware(...middleware),
];


export const configureStore = () => {
  const store = createStore(
    createRootReducer(),
    createRootEnhancer(enhancers),
  );

  return store;
};
