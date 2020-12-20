import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../graphql/schema.gql';

const resolvers = {
  Query: {
    hello: () => {
      return 'hello qraphql!!!';
    },
    test: () => {
      return 'Start QraphQL!!!';
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
