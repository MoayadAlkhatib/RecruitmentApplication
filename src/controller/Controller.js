const DAO = require('../integration/DAO');
const Registration = require('../model/Registration');
/**
 * All classes should call the model or the DAO using this class.
 * @author Moayad Alkhatib
 * @created 2021-01-29
 */
class Controller{
    /**
     * create an instance of controller object.
     */
    constructor(){
        this.DAO = new DAO();
    }

    /**
     * init the database.
     */
    async testConnectivity(){
    await this.DAO.testConnectivity();
    }

    /**
     * validate the form for registration.
     * @param { any } firstName the first field to be checked.
     * @param { any } lastName the second field to be checked. 
     * @param { any } email the third field to be checked.
     * @param { any } dateOfBirth the fourth field to be checked.
     * @param { any } userName the fifth field to be checked.
     * @param { any } Password the sixth field to be checked.
     * @param { any } repeatPassword the sixth field to be checked.
     */
    static validateTheForm(firstName, lastName, email, dateOfBirth,
         userName, Password, repeatPassword){
        return Registration.validateForm(firstName, lastName, email,
             dateOfBirth, userName, Password, repeatPassword);
    }

    /**
     * creates a new user.
     */
     async createUser(name, surname, ssn, email, password,
        role_id, username){
         this.DAO = new DAO();
         return await (await this.DAO.createTable()).create({
            name, surname, ssn, email, password,
                role_id, username
         });
    }

} module.exports = Controller;