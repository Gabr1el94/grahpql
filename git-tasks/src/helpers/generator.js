const jwt = require('jsonwebtoken')

module.exports = {
    createToken(id){
        jwt.sign({id}, 'secret', {expiresIn: 'id'});
    },
    verifyToken(token){
        return jwt.verify(token, "secret");
    }
}