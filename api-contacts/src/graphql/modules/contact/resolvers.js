module.exports = {
    Query: {
        contacts: async (obj, args, context, info) => await context.userRegisterService.contacts(),
    },
    Mutation:{
        createContact: async (_, { data }, {userRegisterService}) =>
            await userRegisterService.createContact(data),
        updateContact: async (_, {id, data}, {userRegisterService}) => 
            await userRegisterService.updateContact(id, data),
        deleteContact: async (_, {filter}, {userRegisterService}) =>
            await userRegisterService.deleteContact(filter),
    }

}