const db = require('../../../db')

function generatorID(list){
    let last = list[list.length - 1];
    let newId = !last ? 0 : last.id;
    return ++newId;
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
        createEmployee(_, {data}){

            const {email} = data;
            const employeeExists = db.employees.some(u => u.email === email)
            if (employeeExists) {
                throw new Error(`Employee Exist: ${data.name}`)
            }
            const newEmployee = {
                ...data,
                id: generatorID(db.employees),
                profile_id: 2,
                phone_fixed: data.phone
            };
            db.employees.push(newEmployee);
            return newEmployee;
        },
        updateEmployee(_, {id, data}){
            const employee = db.employees.find(emp => emp.id === id)
            const index = db.employees.findIndex(emp => emp.id === id)

            const newEmployee = {
                ...employee,
                ...data
            }
            db.employees.splice(index, 1, newEmployee);
            return newEmployee;
        },
        deleteEmployee(_, {id}){
            const employeeFind = db.employees.find(emp => emp.id === id)
            db.employees = db.employees.find(emp => emp.id === id)

            return !!employeeFind;
        },
        deleteEmployeeByIdOrEmail(_, {filter : { id, email}}){
            return deleteEmployeeFilter(id ? {id} : {email});
        }
    },
};

function deleteEmployeeFilter(filter){
    const key = Object.keys(filter)[0];
    const value = Object.values(filter)[0];
    
    const employeeFind = db.employees.find(emp => emp[key] === value)
    db.employees = db.employees.find(emp => emp[key] === value)
    
    return !!employeeFind;
}