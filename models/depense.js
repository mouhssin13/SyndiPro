'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Depense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Depense.init({
    intitule: DataTypes.STRING,
    catergorie: DataTypes.STRING,
    somme: DataTypes.DOUBLE,
    montant_app: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Depense',
  });
  return Depense;
};