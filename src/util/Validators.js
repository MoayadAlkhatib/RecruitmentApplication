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
}module.exports=Validators;