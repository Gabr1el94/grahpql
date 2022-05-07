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
        profile(employee){
            return db.profiles.find(profile => profile.id === employee.profile_id);
        },
    },
    Query :{
        employee(_, args){
            return db.employees.find((db) => db.id === args.id);
        },
        employees: () => db.employees,
    },
    Mutation: {
        createEmployee(_, args){

            const {email} = args;
            const employeeExists = db.employees.some(u => u.email === email)
            if (employeeExists) {
                throw new Error(`Employee Exist: ${args.name}`)
            }
            const newEmployee = {
                ...args,
                id: generatorID(db.employees),
                profile_id: 2,
                phone_fixed: args.phone_fixed
            };
            db.employees.push(newEmployee);
            return newEmployee;
        },
    },
};