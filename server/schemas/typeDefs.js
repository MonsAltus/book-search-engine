const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(_id: ID!): User
    saveBook(authors: [String!], description: String!, bookId: String!, image: String, link: String, title: String!): User
  }
`;

module.exports = typeDefs;
