const db = require('../db');

class UserRegisterService {
    constructor(service){
        this.service = service;
    }
    contacts = async () => await this.service('contacts');
    createContact= async (data) => 
        await (await this.service("contacts").insert(data).returning('*'))[0];
    updateContact= async (id,data) =>
        await (await this.service("contacts").where({id}).update(data).returning('*'))[0];
    deleteContact= async (filter) => {
        if (filter.id) {
            return await this.service("contacts").where({id: filter.id}).delete();
        }
        if (filter.email) {
            return await this.service("contacts").where({email: filter.email}).delete();
        }

        throw new Error("Error! Please, setter a parameter!!!")
    };
}

module.exports = new UserRegisterService(db);