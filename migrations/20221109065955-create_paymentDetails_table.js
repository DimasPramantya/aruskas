'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable('paymentDetails',{
      id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      idPayment: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: true,
      },
      paymentMethod: {
        type: Sequelize.ENUM('BCA', 'Shopee', 'Dana', 'Gopay'),
        allowNull: false,
      },
      numberBankAcc: {
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
    },{
      timestamps: false
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.dropTable('paymentDetails')
  }
};
4