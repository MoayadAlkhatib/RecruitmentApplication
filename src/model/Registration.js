const Validators = require('../util/Validators');
/**
 * validate the registration form.
 * @author Moayad Alkhatib
 * @createdAt 2021-01-31
 */
class Registration{
    /**
     * checks if the field is a name.
     * @param { any } name to be checked.
     */
    static isAName(name){
       return !(Validators.isEmpty(name) ||
       Validators.containsANumber(name) ||
       Validators.containsSpecialCharacters(name))
    }
}module.exports=Registration;