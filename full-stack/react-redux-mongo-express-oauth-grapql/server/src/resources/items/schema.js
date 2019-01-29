import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import { prepare } from '../../services/graphql';
import ObjectId from '../../services/graphql/resolvers/objectId';
import Item from './model';


const ItemType = new GraphQLObjectType({
  name: 'Item',
  description: 'An Item',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  })
});

export const itemQueries = {
  item: {
    description: 'retrieves a item',
    type: ItemType,
    args: { id: { type: new GraphQLNonNull(ObjectId) } },
    resolve: (_, { id }) => Item.findOne({ _id: id }).then(prepare) // add a .lean()?
  },
  items: {
    description: 'retrieves a list of items',
    type: new GraphQLList(ItemType),
    resolve: () => Item.find().then(prepare),
  }
};

export const itemMutations = {
  createItem: {
    description: 'Create a new item',
    type: ItemType,
    args: {
      title: { type: GraphQLString },
      description: { type: GraphQLString },
    },
    resolve: (_, {
      title,
      description,
    }) => Item.create({
      title,
      description,
    }).then(prepare)
  },
  deleteItem: {
    description: 'Delete a Item',
    type: ItemType,
    args: {
      id: { type: new GraphQLNonNull(ObjectId) }
    },
    resolve: (_, { id }) => Item.findOneAndDelete({ _id: id })
      .then(prepare)
  }
};
