const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Validation',{
    id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    memberId: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    token: {
        type: Sequelize.INTEGER(4),
        allowNull: false
    },
    expiredDate: {
        type: Sequelize.DATE(),
        allowNull: false,
    }
}, {
    timestamps: false
})