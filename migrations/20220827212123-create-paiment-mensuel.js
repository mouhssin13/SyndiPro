'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('paimentMensuels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_app: {
        type: Sequelize.INTEGER
      },
      mois: {
        type: Sequelize.STRING
      },
      montant: {
        type: Sequelize.DOUBLE
      },
      statu: {
        type: Sequelize.BOOLEAN
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
      immeuble: {
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
    await queryInterface.dropTable('paimentMensuels');
  }
};