'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appartements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      num_app: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      etage: {
        type: Sequelize.INTEGER
      },
      montantM: {
        type: Sequelize.DOUBLE
      },
      immeuble: {
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
    await queryInterface.dropTable('appartements');
  }
};