const Validators = require('../util/Validators');
/**
 * validate the registration form.
 * @author Moayad Alkhatib
 * @createdAt 2021-01-31
 */
class Registration{

    constructor(){

    }
    /**
     * validate the form for registration.
     * @param {any} firstName the first field to be checked.
     * @param {any} lastName  the second field to be checked.
     * @param { any } email the third field to be checked.
     * @returns an array of errors.
     */
    static validateForm(firstName, lastName, email){
        let err = [];
        if(Validators.isAName(firstName) == false){
          err.push({message: 'Please Enter a valid first name.'})
        }
        if(Validators.isAName(lastName) == false){
          err.push({message: 'Please Enter a valid last name.'})
        }
        if(Validators.isAnEmail(email) == false){
            err.push({message: 'Please Enter a valid email adress.'})
          }
        return err;
    }

}module.exports=Registration;