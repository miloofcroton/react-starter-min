// importing env file
import 'dotenv/config';

// express
import express from 'express';
const app = express();

// cors limiter
import cors from 'cors';
app.use(cors());

// logging
import morgan from 'morgan';
app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'development' }));

// using the built client
app.use(express.static('../client/dist'));

// stuff for apollo server
import {
  schema,
  resolvers,
  models,
  loaders,
} from './resources';
import { getMe } from './resources/users/methods';
import DataLoader from 'dataloader';

// apollo server
import { ApolloServer } from 'apollo-server-express';
const server = new ApolloServer({
  introspection: true,
  typeDefs: schema,
  resolvers,
  formatError: error => {

    const message = error.message
      .replace('SequelizeValidationError: ', '')
      .replace('Validation error: ', '');

    return { ...error, message };
  },
  context: async ({ req, connection }) => {
    if (connection) {
      return {
        models,
        loaders: {
          user: new DataLoader(keys =>
            loaders.user.batchUsers(keys, models),
          ),
        },
      };
    }

    if (req) {
      const me = await getMe(req);

      return {
        models,
        me,
        secret: process.env.SECRET,
        loaders: {
          user: new DataLoader(keys =>
            loaders.user.batchUsers(keys, models),
          ),
        },
      };
    }
  },
});

server.applyMiddleware({
  app,
  path: '/graphql',
  bodyParserConfig: true,
});

// serving the front end
import spa from './middleware/spa';
app.use('*', spa('../client/dist/index.html'));

// node.js HTTP interface
import http from 'http';
const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

export default httpServer;
