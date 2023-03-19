import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers'; 
import connectDB from '../db';

const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers});

connectDB();

server.listen().then(({url}:{url:string}) => {
    console.log(`Response start server: ${url}`);
})