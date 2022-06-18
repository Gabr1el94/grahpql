module.exports = {
    Query:{
        user(_, {login}, { dataSources }){
            return dataSources.gitHubService.getUser(login);
        }
    }
}