const Sequelize = require('sequelize');

 /**
     * Defines the user object using the database.
     * @author Moayad Alkhatib
     * @createdAt 2021-02-02
     */

class User extends Sequelize.Model{
   
    /**
     * create a new instance of User object.
     */
    static defineUser(sequelize){
        User.init({
            name:{
                type:Sequelize.STRING
            },
            surname:{
                type:Sequelize.STRING
            },
            ssn:{
                type:Sequelize.STRING
            },
            email:{
                type:Sequelize.STRING
            },
            password:{
                type:Sequelize.STRING
            },
            role_id:{
                type:Sequelize.INTEGER
            },
            username:{
                type:Sequelize.STRING
            }
        }, {
            sequelize,
            modelName: 'person'
          })
        return User;
    }

}module.exports=User;