const db = require('../../../db');

module.exports = {
    Query: {
        contacts: async () => await db("contacts"),
    },
    Mutation:{
        createContact: async (_, { data }) => 
            await (await db("contacts").insert(data).returning('*'))[0],
        updateContact: async (_, { id,data }) =>
            await (await db("contacts").where({id}).update(data).returning('*'))[0],
        deleteContact: async (_, { filter }) => {
            if (filter.id) {
                return await db("contacts").where({id: filter.id}).delete();
            }
            if (filter.email) {
                return await db("contacts").where({email: filter.email}).delete();
            }

            throw new Error("Error! Please, setter a parameter!!!")
        }
            
    }

}