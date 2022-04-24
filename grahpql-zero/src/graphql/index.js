const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');

const allTypes = loadFilesSync(path.join(__dirname, 'modules',"**","*.gql"));
const allResolvers = loadFilesSync(path.join(__dirname, 'modules',"**","resolvers.js"))

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = {
    typeDefs, resolvers
}