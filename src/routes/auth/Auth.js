const jwt = require('jsonwebtoken');
const Controller = require('../../controller/Controller');
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
                    res.redirect('login');
                }else{
                    console.log(newToken);
                    next();
                }
            })
        }else{
            res.redirect('login');
        }
    }

    /**
     * This middleware used to get user info for a spesific user.
     */
    static userCheck(req, res, next){
        const token= req.cookies.jwt; 

        if(token){
            jwt.verify(token, process.env.JWTSECRET,async (err, newToken)=>{
                if(err){
                    console.log(err);
                    res.locals.user=null;
                    next();
                }else{
                    console.log(newToken);
                    let controller = new Controller();
                    let user = await controller.findUserById(newToken.id);
                    res.locals.user= user;
                    next();
                }
            })
        }else{
            res.locals.user= null;
            next();
        }
    }
}module.exports=Auth;