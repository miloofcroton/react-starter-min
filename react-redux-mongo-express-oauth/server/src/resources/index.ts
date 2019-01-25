import { Router } from 'express';
import users from './users/routes';
import items from './items/routes';
import things from './things/routes';

// const { Router } = require('express');
// const users = require('./users/routes');
// const items = require('./items/routes');
// const things = require('./things/routes');

const resources = [
  users, items, things
];

export default Router().use('/', ...resources);
