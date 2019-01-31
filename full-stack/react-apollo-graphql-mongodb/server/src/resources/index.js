// RESOLVERS
import { GraphQLDateTime } from 'graphql-iso-date';
import userResolvers from './users/resolvers';
import messageResolvers from './messages/resolvers';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export const resolvers = [
  customScalarResolver,
  userResolvers,
  messageResolvers,
];


// MODELS
import UserModel from './users/model';
import MessageModel from './messages/model';

export const models = {
  User: UserModel,
  Message: MessageModel,
};


// LOADERS
import * as usersLoaders from './users/loaders';

export const loaders = {
  user: usersLoaders,
};


// SCHEMAS
import userSchema from './users/schema';
import messageSchema from './messages/schema';
import linkSchema from './links/schema';

export const schema = [
  linkSchema,
  userSchema,
  messageSchema,
];


// SUBSCRIPTIONS
import { PubSub } from 'apollo-server';
import * as MESSAGE_EVENTS from './messages/subscriptions';

export const EVENTS = {
  MESSAGE: MESSAGE_EVENTS,
};

export const pubsub = new PubSub();
