const path = require('path');
const {
    loadFilesSync,
    mergeTypeDefs,
    mergeResolvers,
} = require("graphql-tools");

const allTypes = loadFilesSync(path.join(__dirname, 'modules',"**","*.gql"));
const allResolvers = loadFilesSync(path.join(__dirname, 'modules',"**","resolvers.js"))

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = {
    typeDefs, resolvers
}