const DAO = require('../integration/DAO');
/**
 * All classes should call the model or the DAO using this class.
 * @author Moayad Alkhatib
 * @created 2021-01-29
 */
class Controller{
    /**
     * init the database
     */
    constructor(){
        this.DAO = new DAO();
    }
}