const db = require('../../../db')

module.exports = {
    Query: {
        users(){
            return db.users;
        },
        user(_, args){
            return db.users.find((user) => user.id === args.id); 
        },
    }
}