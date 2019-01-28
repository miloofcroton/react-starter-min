import { ofType } from 'redux-observable';
import { map, filter } from 'rxjs/operators';
import * as types from './types';
import * as items from '../items/actions';
import * as things from '../things/actions';

const requestStuff = action$ => action$.pipe(
  ofType(types.LOCATION_CHANGE),
  map(action => {
    switch (action.payload.location.pathname) {
      case '/items':
        return items.fetchListStart();
      case '/things':
        return things.fetchListStart();
    }
  }),
  filter(Boolean),
);


export const routerEpics = [
  requestStuff
];
