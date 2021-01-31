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
     */
    static validateTheForm(firstName, lastName){
        return Registration.validateForm(firstName, lastName);
    }

} module.exports = Controller;