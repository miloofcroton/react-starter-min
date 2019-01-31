import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import DataLoader from 'dataloader';
import express from 'express';
import {
  ApolloServer,
} from 'apollo-server-express';

import {
  schema,
  resolvers,
  models,
  loaders,
} from './resources';


const app = express();

app.use(cors());

app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'development' }));

import { getMe } from './resources/users/methods';


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

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);

server.installSubscriptionHandlers(httpServer);

export default httpServer;
