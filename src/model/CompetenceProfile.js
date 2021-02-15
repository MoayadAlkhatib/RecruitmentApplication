const Sequelize = require('sequelize');

 /**
     * Defines the competenceProfile table in the database.
     * @author Moayad Alkhatib
     * @createdAt 2021-02-15
     */

class CompetenceProfile extends Sequelize.Model{
   
    /**
     * create a new instance of CompetenceProfile.
     */
    static defineCompetenceProfile(sequelize){
        CompetenceProfile.init({
            person_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            competence_id:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
            years_of_experience:{
                type:Sequelize.INTEGER,
                allowNull: false
            },
        }, {
            sequelize,
            modelName: 'competence_profile',
            timestamps: false
          })
        return CompetenceProfile;
    }

}module.exports=CompetenceProfile;