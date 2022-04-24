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
 * Operation Name(É quando dado o nome das operações) 
 * & Enums(Tipo especial escalagem Valores específicos)
 * 
 * 
 * Example:
 *  query <Name_Operation>{ ... };
 * 
 * Example:
 *  enum TypeProfile {
 *      ADMIN
 *      NORMAL
 *  }
 * 
*/

/**
 *  Directives(As diretivas são precedidas pelo caractere @, assim) & 
 *  Variables(São parametrizadas em operações consulta)
 * 
 *  Example:
 *    query <Name_Operation>($nameVar : <type_scalar>, $withProfile : Bollean!, $isActive : Bollean){ 
 *         name email 
 *         phone @skip(if: $isActive) 
 *         profile @include(if: $withProfile){ ... }
 *     }
 *     
 *     More info: https://www.apollographql.com/docs/apollo-server/schema/directives/ 
 */

/**
 * Object Types
 *  => Schema - É uma representação de um objeto
 *   -> Schema Definition Language(SDL)
 * -------------------------------------
 * Arguments -> Parametrizações(obj,args)
 * 
 * resolvers -> ele mapea especificamente para o tipo objeto;
 * typeDefs -> são os tipos nos objetos que possam ser consultados e mapeados
 * 
 * For example Aliases:
 *  <Name_Alias> : user;
 * 
 * Fragments(são unidades reutilizaveis) example:
 *  users: () => db.users
 *  query{
 *      users{ ...<Name_Fragment>}
 *  }
 * 
 *  fragment <Name_Fragment> on <Type_Query>
 */
 
const db = [
     {
         id: 1,
         name: "Arthur",
         email: "arthurpaz@gmail.com",
         phone: "81 96451-6523",
         profile: 1  
     },
     {
        id: 2,
        name: "Lucas",
        email: "arthur@gmail.com",
        phone: "81 98752-3654",
        profile: 2  
    }
] 

 const profiles = [
     {id: 1, description: "ADMIN"},
     {id: 2, description: "NORMAL"}
 ]

 const users = [
    {
        id: 1,
        name: 'Katia',
        salary: 1234.56,
        active: false,
        age: 52
    },
    {
        id: 2,
        name: 'Gabriel',
        salary: 3000,
        active: true,
        age: 28
    }
];

const products = [
    {
        id: 1,
        name: 'Coca-Cola',
        price: 9.90
    },
    {
        id: 2,
        name: 'Beer',
        price: 12.90
    },
];

const resolvers = {
    Funcionary:{
        phone(obj){
            return obj.phone_fixed;
        },
        profile(func){
            return profiles.find(profile => profile.id === func.id);
        }
    },
    Query: {
        profiles(){
            return profiles;
        },
        users(){
            return users;
        },
        user(_, args){
            return users.find((user) => user.id === args.id); 
        },
        products(){
            return products;
        },
        funcionary(_, args){
            return db.find((db) => db.id === args.id);
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

    type Funcionary {
        id: Int
        name: String
        email: String
        phone: String
        profile: Profile
    }

    type Profile {
        id: Int
        description: String
    }

    type Query{
        users: [User]
        products: [Product]
        funcionary: Funcionary
        user(id: Int): User
        profiles: [Profile]
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen();