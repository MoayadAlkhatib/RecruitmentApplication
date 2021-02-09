const jwt = require('jsonwebtoken');
/**
 * This class contains all method used for authorization.
 * @author Moayad Alkhatib
 * @createdAt 2021-02-09
 */
class Auth{
    /**
     * creates a token for user.
     * @param { any } id the user id.
     */
    static createToken(id){
        return jwt.sign({ id }, process.env.JWTSECRET, {
            expiresIn: 24 * 60 * 60
        });
    }
}module.exports=Auth;