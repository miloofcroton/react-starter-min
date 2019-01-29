/* eslint-disable no-console */

import { config } from 'dotenv';
config();

import app from './app';

import { connect } from './services/mongo/connection';
connect();

const PORT = process.env.PORT || 7890;
app.listen(PORT, () => console.log('Running on', PORT));
