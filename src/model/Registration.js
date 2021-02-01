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
     * @param { any } dateOfBirth the fourth field to be checked.
     * @param { any } userName the fifth field to be checked.
     * @returns an array of errors.
     */
    static validateForm(firstName, lastName, email, dateOfBirth, userName){
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
        if(Validators.isADateOfBirth(dateOfBirth) == false){
            err.push({message: 'The date of birth should match this format yyyymmdd'})
          }
        if(Validators.isAUserName(userName) == false){
            err.push({message: 'Please Enter a valid username.'})
          }
        return err;
    }

}module.exports=Registration;