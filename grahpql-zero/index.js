const {gql, ApolloServer } = require("apollo-server");

/**
 * Scalar Types
 *  - Int
 *  - Float
 *  - String
 *  - Boolean
 *  - ID (exclusive)
*/

/**
 * Object Types
 *  => Schema - É uma representação de um objeto
 *   -> Schema Definition Language(SDL)
 * -------------------------------------
 * Arguments
 */

const resolvers = {
    Query: {
        users(){
            return [
            {
                id:1,
                name:'Katia',
                salary:1234.56,
                active: false,
                age: 52
            },
            {
                id:2,
                name:'Gabriel',
                salary:3000,
                active: true,
                age: 28
            }
            ]
        },
        products(){
            return [
            {
                id:1,
                name:'Coca-Cola',
                price:9.90
            },
            {
                id:2,
                name:'Beer',
                price:12.90
            },
        ]
        }
    }
};

const typeDefs = gql`

    type Product {
        id: ID
        name: String
        price: Float
    }

    type User {
        age: Int
        salary: Float
        name: String
        active: Boolean
        id: ID 
    }

    type Query{
        users: [User]
        products: [Product]
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen();