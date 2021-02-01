/**
 * This class has all the methods needed to validate the data
 * before sending it to the database or the application backend.
 * @author Moayad Alkhaib
 * @created 2021-01-31
 */
class Validators{
    /**
     * checks if a field is not empty.
     * @param { any } field to be ckecked.
     */
    static isEmpty(field){
        if(field == null || field == ''){
            return true
        }else{
            return false
        }
    }

    /**
     * checks if a name contains special characters.
     * @param { any } name to be checked.
     */
    static containsSpecialCharacters(name){
        let specialCharacters = /[*()_!@#$%+\-=\[\]{};':"\\|,.^&<>\/?]/g;
        return specialCharacters.test(name);
    }

    /**
     * checks if a name contains any number.
     * @param { any } name to be checked.
     */
    static containsANumber(name){
        return /\d/.test(name);
    }

    /**
     * checks if the field is a name.
     * @param { any } name to be checked.
     */
    static isAName(name){
        return !(this.isEmpty(name) ||
        this.containsANumber(name) ||
        this.containsSpecialCharacters(name))
     }

     /**
      * checks if the field is an email adress.
      * @param { any } email to be checked.
      */
     static isAnEmail(email){
        let emailForm = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return emailForm.test(email);
     }

     /**
      * checks if the field is a date of birth.
      * @param { any } dateOfBirth to be checked.
      */
      static isADateOfBirth(dateOfBirth){
        let dateForm = /^([0-9]{4})([0-9]{2})([0-9]{2})$/
        return dateForm.test(dateOfBirth);
     } 

}module.exports=Validators;