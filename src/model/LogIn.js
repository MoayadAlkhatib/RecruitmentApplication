const Validators = require('../util/Validators');
class LogIn{
    static validateForm(userName,passWord){
        let err = [];
        if(Validators.isAName(userName) == false){
            err.push({message: 'Please Enter a valid username.'})
          }
          if(passWord.length < 6){
            err.push({message: 'The password must be at least 6 characters.'})
          }
          if(passWord.length > 30){
            err.push({message: 'The password can not be greater than 30 characters.'})
          }
          return err;
    }
}
module.exports=LogIn;