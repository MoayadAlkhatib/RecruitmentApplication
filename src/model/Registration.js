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
     * @param { any } email the third field to be checked.
     * @param { any } dateOfBirth the fourth field to be checked.
     * @param { any } userName the fifth field to be checked.
     * @param { any } Password the sixth field to be checked.
     * @param { any } repeatPassword the sixth field to be checked.
     * @returns an array of errors.
     */
    static validateForm(firstName, lastName, email, dateOfBirth, userName, Password, repeatPassword){
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
        if(Password.length < 6){
            err.push({message: 'The password must be at least 6 characters.'})
          }
          if(Password.length > 30){
            err.push({message: 'The password can not be greater than 30 characters.'})
          }
          if((repeatPassword == Password)==false){
            err.push({message: 'The passwords do not match'})
          }
        return err;
    }

}module.exports=Registration;