const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
 _id: ID
 username: String
 email: String
 bookCount: Int
 savedBooks: [Book]
}
type Query {
 me: User
}
type Book {
 bookId: ID
 authors: [String]
 description: String
 title: String
 image: Img
 link: URL
}
type Auth {
 token: ID!
 user: User
}
type Mutation {
 login(email: String!, password: String!): Auth
 addUser(username: String!, email: String!, password: String!): Auth
 saveBook(bookauthor array, description, title, bookId, image, link): Input
 removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;