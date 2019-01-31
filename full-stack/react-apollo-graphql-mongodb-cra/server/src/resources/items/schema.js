import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    items: [Item!]
    item(id: ID!): Item
  }

  extend type Mutation {
    createItem(title: String!, description: String): Item!
    deleteItem(id: ID!): Boolean!
  }

  type Item {
    id: ID!
    title: String!
    description: String!
  }
`;
