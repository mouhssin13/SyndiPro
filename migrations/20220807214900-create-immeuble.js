'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Immeubles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom_im: {
        type: Sequelize.STRING
      },
      adresse: {
        type: Sequelize.STRING
      },
      nbr_et: {
        type: Sequelize.INTEGER
      },
      nbr_app: {
        type: Sequelize.INTEGER
      },
      syndic: {
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
    await queryInterface.dropTable('Immeubles');
  }
};