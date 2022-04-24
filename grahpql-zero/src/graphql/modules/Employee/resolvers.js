const db = require('../../../db')

module.exports = {
    Employee:{
        phone(obj){
            return obj.phone_fixed;
        },
        profile(func){
            return db.profiles.find(profile => profile.id === func.id);
        }
    },
    Query :{
        employee(_, args){
            return db.employees.find((db) => db.id === args.id);
        }
    }
}