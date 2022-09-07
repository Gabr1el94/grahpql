import { ApolloServer, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:400',
    cache: new InMemoryCache(),
});