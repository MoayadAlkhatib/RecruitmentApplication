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
            User.defineUser(this.db);
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

    /**
     * login method.
     * @param { any } username 
     * @param { any } password
     */
    async login(username, password){
        const user= await User.findAll({where:{ username: username }});
        if(user != ''){
            if(user[0].password == password){
              return user[0];
            }throw Error('incorrect password.');
        }throw Error('incorrect username.');
    }

    /**
     * find user by id
     * @param { any } id
     */
    async findUserById(id){
        return await User.findByPk(id);
    }

} module.exports = DAO;