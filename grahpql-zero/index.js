const {gql, ApolloServer } = require("apollo-server");

/**
 * Scalar Types
 *  - Int
 *  - Float
 *  - String
 *  - Boolean
 *  - ID (exclusive)
*/

const resolvers = {
    Query:{
        age(){
            return 20;
        },
        salary(){
            return 4330.45;
        },
        name(){
            return "Gabriel";
        },
        active(){
            return true;
        },
        id(){
            return 515445;
        }
    }
}
const typeDefs = gql`
    type Query{
        age: Int
        salary: Float
        name: String
        active: Boolean
        id: ID 
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen();