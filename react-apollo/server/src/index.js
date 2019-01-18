/* eslint-disable no-console */

import app from './app';
import { config } from 'dotenv';
import { connect } from './services/mongo/connection';
config();
connect();

import { server } from './app';
const PORT = process.env.PORT || 7890;
// app.listen(PORT, () => console.log('Running on', PORT));
app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/${server.graphqlPath}`)
);
