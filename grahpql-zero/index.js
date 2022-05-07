const {gql, ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
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

/**
 * Mutation
 *  => Uma Mutação é uma operação do GraphQL que permite inserir novos dados 
 *  ou modificar os dados existentes no lado do servidor. 
 *  Você pode pensar em GraphQL Mutations como o equivalente a solicitações
 *  POST, PUT, PATCH e DELETE em REST.
 */

const server = new ApolloServer({
    ...graphql
});


server.listen().then(({url}) => console.log(url) );