// express
import express from 'express';
const app = express();

// cors limiter
// import cors from './middleware/cors';

// logging
import morgan from 'morgan';
app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'development' }));

// using the built server
app.use(express.static('../client/dist'));

// parsing the body
import bodyParser from 'body-parser';
app.use(bodyParser.json());

// to protect the entire GraphQL api
import { checkJwt } from './middleware/oauth';
app.use(checkJwt);

// serving the GraphQL api
import graphqlHTTP from 'express-graphql';
import schema from './resources';
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// serving the front end
import spa from './middleware/spa';
app.use('*', spa('../client/dist/index.html'));

// catch errors
import { errorHandler } from './middleware/error';
app.use(errorHandler);

export default app;
