const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

module.exports = sequelize.define('Payment',{
    id: {
        type: Sequelize.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paymentType: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER(8),
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('Berhasil', 'Proses', 'Ditolak'),
        allowNull: false
    },
    paymentProof: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    memberId: {
        type: Sequelize.INTEGER(10),
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
})