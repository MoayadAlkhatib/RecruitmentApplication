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

    /**
     * This middleware fires if a route need to be authinticated.
     */
    static authrequire(req, res, next){
        const token= req.cookies.jwt;

        if(token){
            jwt.verify(token, process.env.JWTSECRET, (err, newToken)=>{
                if(err){
                    console.log(err);
                    res.render('login');
                }else{
                    console.log(newToken);
                    next();
                }
            })
        }else{
            res.render('login');
        }
    }
}module.exports=Auth;