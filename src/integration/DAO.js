const Sequelize  = require('sequelize');
/**
 * This is the class responsible for connections and calls 
 * to the database.
 */
class DAO{
    /**
     * creates a new connection to the database.
     */
    constructor(){
        this.db = new Sequelize( process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASS,
            {host: process.env.DB_HOST, dialect: process.env.DB_DIALECT})
    }

} module.exports = ChatDAO;