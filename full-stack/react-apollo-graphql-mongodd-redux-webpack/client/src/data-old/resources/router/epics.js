import { ofType } from 'redux-observable';
import { map, filter } from 'rxjs/operators';
import * as types from './types';
import * as items from '../items/actions';
import * as things from '../things/actions';
import * as sessions from '../sessions/actions';
import { empty } from 'rxjs';

const requestStuff = action$ => action$.pipe(
  ofType(types.LOCATION_CHANGE),
  map(action => {
    switch (action.payload.location.pathname) {
      case '/items':
        return items.fetchListStart();
      case '/things':
        return things.fetchListStart();
      case '/callback':
        return sessions.handleAuth();
    }
  }),
  filter(Boolean),
);

export const routerEpics = [
  requestStuff,
];
