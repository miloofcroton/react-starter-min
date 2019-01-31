import { combineResolvers } from 'graphql-resolvers';

export default {
  Query: {
    items: async (parent, args, { models }) => {
      return await models.Item.find();
    },
    item: async (parent, { id }, { models }) => {
      return await models.Item.findById(id);
    },
  },

  Mutation: {
    createItem: combineResolvers(
      async (parent, { title, description }, { models }) => {
        const item = await models.Item.create({
          title,
          description,
        });

        return item;
      },
    ),

    deleteItem: combineResolvers(
      async (parent, { id }, { models }) => {
        const item = await models.Item.findById(id);

        if (item) {
          await item.remove();
          return true;
        } else {
          return false;
        }
      },
    ),
  },

};
