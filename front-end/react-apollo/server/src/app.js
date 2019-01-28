// express
import express from 'express';
const app = express();

// apollo
import { ApolloServer, gql } from 'apollo-server-express';
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
export const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });


// cors limiter
// import cors from './middleware/cors';

// logging
import morgan from 'morgan';
app.use(morgan('dev', { skip: () => process.env.NODE_ENV === 'development' }));

// basic express stuff
app.use(express.static('../client/dist'));
app.use(express.json());

// serving resourse routes
import routes from './resources';
app.use('/api', routes);

// serving the front end
import spa from './middleware/spa';
app.use('*', spa('../client/dist/index.html'));

// catch errors
import { errorHandler } from './middleware/error';
app.use(errorHandler);

export default app;
