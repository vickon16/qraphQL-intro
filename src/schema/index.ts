export const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!],
  }

  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    authorId: String!,
    gameId: String!,
    game: Game!,
    author: Author!,
  }

  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!],
  }

  # this type is not optional
  # this specifies entries to the graph
  type Query {
    reviews: [Review],
    review(id: ID!): Review,
    games: [Game],
    game(id: ID!): Game,
    authors: [Author],
    author(id: ID!): Author,
  }
  type Mutation {
    addGame(input: AddGameInput!): Game,
    deleteGame(id: ID!): [Game],
    updateGame(id: ID!, input: UpdateGameInput!): Game,
  }

  # inputs
  input AddGameInput {
    title: String!,
    platform: [String!]!,
  }
  input UpdateGameInput {
    title: String,
    platform: [String!],
  }
`;

// int, float, string, boolean, ID
