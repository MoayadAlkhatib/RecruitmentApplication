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
                type:Sequelize.STRING,
                allowNull: false
            },
            surname:{
                type:Sequelize.STRING,
                allowNull: false
            },
            ssn:{
                type:Sequelize.STRING,
                allowNull: false
            },
            email:{
                type:Sequelize.STRING,
                allowNull: false,
                unique: {
                args: true,
                msg: 'The email is already used.'
               }
            },
            password:{
                type:Sequelize.STRING,
                allowNull: false
            },
            role_id:{
                type:Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 2
            },
            username:{
                type:Sequelize.STRING,
                allowNull: false,
                unique: {
                args: true,
                msg: 'The username is already used please try anothor one.'
               }
            }
        }, {
            sequelize,
            modelName: 'person'
          })
        return User;
    }

}module.exports=User;