import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { prepare } from '../../services/graphql';
import ObjectId from '../../services/graphql/resolvers/objectId';
import Thing from './model';


const ThingType = new GraphQLObjectType({
  name: 'Thing',
  description: 'A Thing',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});

export const thingQueries = {
  thing: {
    description: 'retrieves a thing',
    type: ThingType,
    args: { id: { type: new GraphQLNonNull(ObjectId) } },
    resolve: (_, { id }, req) => {
      if (req.user) {
        return Thing.findOne({ _id: id }).then(prepare); // add a .lean()?
      }
      else return [];
    },
  },
  things: {
    description: 'retrieves a list of things',
    type: new GraphQLList(ThingType),
    resolve: (_, args, req) => {
      if (req.user) {
        return Thing.find().then(prepare);
      }
      else return [];
    },
  }
};

export const thingMutations = {
  createThing: {
    description: 'Create a new thing',
    type: ThingType,
    args: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
    },
    resolve: (_, {
      title,
      description,
    }, req) => {
      if (req.user) {
        return Thing.create({
          title,
          description,
        }).then(prepare);
      }
      else return [];
    },
  },
  deleteThing: {
    description: 'Delete a Thing',
    type: ThingType,
    args: {
      id: { type: new GraphQLNonNull(ObjectId) }
    },
    resolve: (_, { id }, req) => {
      if (req.user) {
        return Thing.findOneAndDelete({ _id: id })
          .then(prepare);
      }
      else return [];
    },
  }
};
