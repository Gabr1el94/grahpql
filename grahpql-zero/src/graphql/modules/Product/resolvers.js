const db = require('../../../db')

module.exports = {
    Query: {
        products(){
            return db.products;
        }
    }
}