'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable('payments', {
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
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    return queryInterface.dropTable('payments');
  }
};
