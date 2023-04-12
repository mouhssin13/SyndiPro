'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cotisations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      intitule: {
        type: Sequelize.STRING
      },
      categorie: {
        type: Sequelize.STRING
      },
      montant: {
        type: Sequelize.DOUBLE
      },
      payeP: {
        type: Sequelize.STRING
      },
      owner: {
        type: Sequelize.STRING
      },
      ownerID: {
        type: Sequelize.INTEGER
      },
      ownerImage: {
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
    await queryInterface.dropTable('Cotisations');
  }
};