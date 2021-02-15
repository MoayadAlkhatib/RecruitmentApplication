const DAO = require('../integration/DAO');
const Registration = require('../model/Registration');
const LogIn = require('../model/LogIn');
const CompetenceValidation = require('../model/CompetenceValidation');

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
     validateTheForm(firstName, lastName, email, dateOfBirth,
         userName, Password, repeatPassword){
        return Registration.validateForm(firstName, lastName, email,
             dateOfBirth, userName, Password, repeatPassword);
    }

    validateLogIn(userName, passWord){
        return LogIn.validateForm(userName, passWord);
    }

    /**
     * creates a new user and push the data to the database.
     *
     */
     async createUser(name, surname, ssn, email, password,
        role_id, username){
         return await (await this.DAO.createTable()).create({
            name, surname, ssn, email, password,
                role_id, username
         });
    }

    /**
     * sign in a user.
     * @param { any } userName to login.
     * @param { any } password to login.
     */
    async signIn(userName, password){
        return await this.DAO.login(userName, password);
    }

    /**
     * find a user by its id.
     * @param { any } id of a specific user.
     */
    async findUserById(id){
        return await this.DAO.findUserById(id);
    }

    /**
     * creates a new competence.
     */
    async createComp(competence){
        return await this.DAO.createCompetence(competence);
    }

    /**
     * returns all competences.
     */
    async getComp(){
        return await this.DAO.getCompetences();
    }

    /**
     * Validate the competence form.
     * @param {any} area of expertise.
     * @param {any} years  of experience in the area.
     * @returns an array of errors.
     */
     validateCompetence(area, years){
        return CompetenceValidation.validateForm(area, years);
    }

     /**
     * creates a new competenceProfile.
     */
    async createCompProfile(person_id, competence_id, years_of_experience){
        return await this.DAO.createCompetenceProfile
        (person_id, competence_id, years_of_experience);
    }
    /**
     * gets the competence_id by entering the competence name.
     * @param { any } competences An array of all competences.
     * @param { any } competence to search for.
     */
    getCompid(competences, competence){
        for(let i=0; i<competences.length; i++){
            if(competences[i].name == competence){
                return competences[i].id
            }
        }
    }

} module.exports = Controller;