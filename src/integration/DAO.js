const Sequelize  = require('sequelize');
const User = require('../model/User');
/**
 * This is the class responsible for connections and calls 
 * to the database.
 * @author Moayad Alkhaib
 * @created 2021-01-29
 */
class DAO{
    /**
     * creates a new connection to the database.
     */
    constructor(){
        this.db = new Sequelize( process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASS,
            {host: process.env.DB_HOST, dialect: process.env.DB_DIALECT});
            this.db.sync({force: false});
    }

    /**
     * Tests the connectivity to the database.
     * @throws an exception if can not connect to the database.
     */
    async testConnectivity(){
        await this.db.authenticate()
    }

    /**
     * Defines the user table in the database.
     */
     async createTable(){
      return User.defineUser(this.db);
    }


} module.exports = DAO;