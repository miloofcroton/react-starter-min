import { Router } from 'express';
import users from './users/routes';
import items from './items/routes';
import things from './things/routes';

const resources = [
  users, items, things
];

export default Router().use('/', ...resources);
