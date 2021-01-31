const Validators = require('../util/Validators');
/**
 * validate the registration form.
 * @author Moayad Alkhatib
 * @createdAt 2021-01-31
 */
class Registration{
    /**
     * validate the form for registration.
     * @param {any} firstName the first field to be checked.
     * @param {any} lastName  the second field to be checked.
     * @returns an array of errors.
     */
    static validateForm(firstName, lastName){
        let err = [];
        if(Validators.isAName(firstName)){
        }else{
            err.push({message: 'Please Enter a valid first name.'})
        }
        if(Validators.isAName(lastName)){
        }else{
            err.push({message: 'Please Enter a valid last name.'})
        }
        return err;
    }

}module.exports=Registration;