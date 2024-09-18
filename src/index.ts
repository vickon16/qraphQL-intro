import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/index.js";
import db from "./data/index.js";

const resolvers = {
  // the "Query" matches the type name in the schema
  Game: {
    reviews: (parent) => db.reviews.filter((r) => r.gameId === parent.id),
  },
  Author: {
    reviews: (parent) => db.reviews.filter((r) => r.authorId === parent.id),
  },
  Review: {
    game: (parent) => db.games.find((g) => g.id === parent.gameId),
    author: (parent) => db.authors.find((a) => a.id === parent.authorId),
  },
  Query: {
    reviews: () => db.reviews,
    review: (_, args) => db.reviews.find((review) => review.id === args.id),
    games: () => db.games,
    game: (_, args) => db.games.find((game) => game.id === args.id),
    authors: () => db.authors,
    author: (_, args) => db.authors.find((author) => author.id === args.id),
  },
  Mutation: {
    addGame: (_, args) => {
      const newGame = {
        ...args.input,
        id: Math.random().toString(36).slice(2),
      };
      db.games.push(newGame);
      return newGame;
    },
    updateGame: (_, args) => {
      db.games = db.games.map((g) => {
        if (g.id === args.id) return { ...g, ...args.input };
        return g;
      });
      return db.games.find((game) => game.id === args.id);
    },
    deleteGame: (_, args) => db.games.filter((g) => g.id !== args.id),
  },
};

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
