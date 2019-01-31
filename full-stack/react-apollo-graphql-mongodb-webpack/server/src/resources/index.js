// RESOLVERS
import { GraphQLDateTime } from 'graphql-iso-date';
import userResolvers from './users/resolvers';
import messageResolvers from './messages/resolvers';
import itemResolvers from './items/resolvers';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export const resolvers = [
  customScalarResolver,
  userResolvers,
  messageResolvers,
  itemResolvers,
];


// MODELS
import UserModel from './users/model';
import MessageModel from './messages/model';
import ItemModel from './items/model';

export const models = {
  User: UserModel,
  Message: MessageModel,
  Item: ItemModel,
};


// LOADERS
import * as usersLoaders from './users/loaders';

export const loaders = {
  user: usersLoaders,
};


// SCHEMAS
import linkSchema from './links/schema';
import userSchema from './users/schema';
import messageSchema from './messages/schema';
import itemSchema from './items/schema';

export const schema = [
  linkSchema,
  userSchema,
  messageSchema,
  itemSchema,
];


// SUBSCRIPTIONS
import { PubSub } from 'apollo-server';
import * as MESSAGE_EVENTS from './messages/subscriptions';

export const EVENTS = {
  MESSAGE: MESSAGE_EVENTS,
};

export const pubsub = new PubSub();
