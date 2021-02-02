const sequelize = require('sequelize');
const DAO = require('../integration/DAO');

 /**
     * Defines the user object using the database.
     * @author Moayad Alkhatib
     * @createdAt 2021-02-02
     */

class User{
    /**
     * create a connection to the database.
     */
    constructor(){
        this.DAO= new DAO();
    }
    
    /**
     * create a new instance of User object.
     */
    async createUser(){
        await this.DAO.define('User', {
            name:{
                type:sequelize.STRING
            },
            surname:{
                type:sequelize.STRING
            },
            ssn:{
                type:sequelize.STRING
            },
            email:{
                type:sequelize.STRING
            },
            password:{
                type:sequelize.STRING
            },
            role_id:{
                type:sequelize.INTEGER
            },
            username:{
                type:sequelize.STRING
            }
        })
    }
}