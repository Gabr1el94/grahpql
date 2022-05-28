const {gql, ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const userRegisterService = require('./src/serivces/UserRegisterService');

const server = new ApolloServer({
    ...graphql,
    context: () => ({
        userRegisterService: UserRegisterService 
    })
});


server.listen().then(({url}) => console.log(url));