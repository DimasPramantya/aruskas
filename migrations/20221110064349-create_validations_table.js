'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable('validations', {
      id: {
        type: Sequelize.INTEGER(10),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      memberId: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        unique: true,
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    return queryInterface.dropTable('validations');
  }
};
