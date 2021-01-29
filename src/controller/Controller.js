const DAO = require('../integration/DAO');
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


} module.exports = Controller;