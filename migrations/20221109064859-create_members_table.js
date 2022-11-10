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

    return queryInterface.createTable('members', {
      id: {
        type: Sequelize.INTEGER(10),
        allowNULL: false,
        autoIncrement: true,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING(50),
        allowNULL: false
      },
      password: {
        type: Sequelize.STRING(30),
        allowNULL: false
      },
      fullName: {
        type: Sequelize.STRING(50),
        allowNULL: false
      },
      division: {
        type: Sequelize.ENUM('Mobile', 'Web', 'Human Resource'),
        allowNULL: false
      },
      phoneNumber: {
        type: Sequelize.STRING(15),
        allowNULL: false
      },
      profilePict: {
        type: Sequelize.STRING(100),
        allowNULL: true
      },
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

    return queryInterface.dropTable('members');
  }
};
