import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float
    description: String
    image: String
  }

  type Query {
    products: [Product!]!
  }
`;
