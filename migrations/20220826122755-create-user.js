'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cin: {
        type: Sequelize.STRING
      },
      nom: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      tel: {
        type: Sequelize.STRING
      },
      immeuble: {
        type: Sequelize.STRING
      },
      nbr_app: {
        type: Sequelize.INTEGER
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      },
      president: {
        type: Sequelize.STRING
      },
      vice_president: {
        type: Sequelize.STRING
      },
      tresorie: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};