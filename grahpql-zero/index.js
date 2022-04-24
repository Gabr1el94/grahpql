const {gql, ApolloServer } = require("apollo-server");
const {typeDefs, resolvers} = require("./src/graphql");
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

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({url}) => console.log(url) );