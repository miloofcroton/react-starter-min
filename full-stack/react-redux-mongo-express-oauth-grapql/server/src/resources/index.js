import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { itemQueries, itemMutations } from './items/schema';
import { thingQueries, thingMutations } from './things/schema';

const Queries = new GraphQLObjectType({
  name: 'RootQueries',
  description: 'My root queries',
  fields: () => ({
    ...itemQueries,
    ...thingQueries,
  })
});

const Mutations = new GraphQLObjectType({
  name: 'RootMutations',
  description: 'Root mutations',
  fields: () => ({
    ...itemMutations,
    ...thingMutations,
  })
});

const Schema = new GraphQLSchema({
  query: Queries,
  mutation: Mutations
});

export default Schema;
