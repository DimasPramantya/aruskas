const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Member',{
    id:{
        type: Sequelize.INTEGER(10),
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type: Sequelize.STRING(50),
        allowNULL: false
    },
    password:{
        type: Sequelize.STRING(30),
        allowNULL: false
    },
    fullName:{
        type: Sequelize.STRING(50),
        allowNULL: false
    },
    division:{
        type: Sequelize.ENUM('Mobile','Web','Human Resource'),
        allowNULL: false
    },
    phoneNumber:{
        type: Sequelize.STRING(15),
        allowNULL: false
    }, 
    profilePict:{
        type: Sequelize.STRING(100),
        allowNULL: true
    }
}, {
    timestamps: false
})