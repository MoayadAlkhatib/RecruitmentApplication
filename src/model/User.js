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
            id:{
               autoIncrement:true,
               primaryKey:true,
               type: Sequelize.INTEGER
            },
            name:{
                type:Sequelize.STRING,
                allowNull: false
            },
            surname:{
                type:Sequelize.STRING,
                allowNull: false
            },
            ssn:{
                type:Sequelize.STRING
            },
            email:{
                type:Sequelize.STRING,
                unique: {
                args: true,
                msg: 'The email is already used.'
               }
            },
            password:{
                type:Sequelize.STRING,
            },
            role_id:{
                type:Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 2
            },
            username:{
                type:Sequelize.STRING,
                unique: {
                args: true,
                msg: 'The username is already used please try anothor one.'
               }
            }
        }, {
            sequelize,
            modelName: 'person',
            timestamps: true,
            updatedAt: false
          })
        return User;
    }

}module.exports=User;