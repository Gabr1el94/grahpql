const {gql, ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");

const server = new ApolloServer({
    ...graphql,
    formatError:(err) =>{
        if (err.message.startsWith("Employee Exist")) {
            return new Error(err.message)
        }

        return err;
    }
});


server.listen().then(({url}) => console.log(url));