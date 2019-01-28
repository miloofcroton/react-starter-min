import { get, post } from './requests';

const THINGS_API = '/api/things';

export const getThing = id => get(`${THINGS_API}/${id}`);

export const getThings = () => get(`${THINGS_API}`);

export const createThing = thing => post(`${THINGS_API}`, thing);
