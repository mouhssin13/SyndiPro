'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cotisation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cotisation.init({
    intitule: DataTypes.STRING,
    categorie: DataTypes.STRING,
    montant: DataTypes.DOUBLE,
    payeP: DataTypes.STRING,
    owner: DataTypes.STRING,
    ownerID: DataTypes.INTEGER,
    ownerImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cotisation',
  });
  return Cotisation;
};