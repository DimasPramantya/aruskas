const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('PaymentDetail', {
    id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    idPayment:{
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: true,
    },
    paymentMethod:{
        type: Sequelize.ENUM('BCA', 'Shopee', 'Dana', 'Gopay'),
        allowNull: false,
    },
    numberBankAcc:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    senderName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    date: {
        type: Sequelize.DATE(),
        allowNull: false,
    }
}, {
    timestamps: false
})