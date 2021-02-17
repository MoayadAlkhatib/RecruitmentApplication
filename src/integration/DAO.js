const Sequelize  = require('sequelize');
const User = require('../model/User');
const bcrypt = require('bcrypt');
const Competence = require('../model/Competence')
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
        this.db = null;
        if(process.env.DATABASE_URL){
            this.db = new Sequelize( process.env.DB_RNAME,
                process.env.DB_RUSER,
                process.env.DB_RPASS,
                {host: process.env.DB_RHOST, dialect: process.env.DB_DIALECT});
                User.defineUser(this.db);
                Competence.defineCompetence(this.db);

       }else{
            this.db = new Sequelize( process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASS,
            {host: process.env.DB_HOST, dialect: process.env.DB_DIALECT});}
            this.db.sync({force: false});
            User.defineUser(this.db);
            Competence.defineCompetence(this.db);
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
     * @param { any } username entered to log in.
     * @param { any } password entered to log in.
     */
    async login(username, password){
        const user= await User.findAll({where:{ username: username }});
        if(user != ''){
            const auth = await bcrypt.compare(password, user[0].password);
            if(auth){
              return user[0];
            }throw Error('incorrect password.');
        }throw Error('incorrect username.');
    }

    /**
     * find user by id
     * @param { any } id of a specific user.
     */
    async findUserById(id){
        return await User.findByPk(id);
    }

    /**
     * Creates a new competence.
     * @param { any } competence to be added.
     */
    async createCompetence(competence){
        return await Competence.create({name: competence});
    }

     /**
     * returns all competences.
     */
    async getCompetences(){
        return await Competence.findAll();
    }

} module.exports = DAO;