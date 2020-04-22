const Sequelize = require('sequelize')
const db = require('../db/db.js')

module.exports = db.sequelize.define(
    'emps',
    // {define:},
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        // allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        // allowNull: false
        
      },
      created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      phoneNumber: {
        type:Sequelize.INTEGER,
        allowNull:false
      },
      salary:{
        type:Sequelize.INTEGER,
        allowNull:false
      }
     
    },
   {
      timestamps: false
    }
   , {
      // freezeTableName:true
    },
   
  )