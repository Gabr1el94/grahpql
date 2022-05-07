const db = require('../../../db')

function generatorID(list){
    let last = list[list.length - 1];
    return !last ? 0 : ++last.id; 
}

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
        },
        employees: () => db.employees,
    },
    Mutation: {
        createEmployee(_, args){
            const newEmployee = {
                ...args,
                id: generatorID(db.employees),
                profile: 2,
            }
            db.employees.push(newEmployee);
            console.log(db.employees);
            return newEmployee;
        },
    },
};