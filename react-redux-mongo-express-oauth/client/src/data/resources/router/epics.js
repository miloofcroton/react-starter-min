import { ofType } from 'redux-observable';
import { mergeMap, map, catchError, of, subscribe } from 'rxjs/operators';
import * as types from './types';
import * as items from '../items/actions';
import * as things from '../items/actions';
import { dummyAction } from '../dummy';

const requestItems = action$  => action$.pipe(
  ofType(types.LOCATION_CHANGE),
  map((response) => {
    if (response.payload.location.pathname == '/items') {
      return items.fetchListStart();
    }
    else if (response.payload.location.pathname == '/things') {
      return things.fetchListStart();
    }
    else return dummyAction();
  }),
);


export const routerEpics = [
  requestItems
];
