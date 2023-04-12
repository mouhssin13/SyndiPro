'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Immeuble extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Immeuble.init({
    nom_im: DataTypes.STRING,
    adresse: DataTypes.STRING,
    nbr_et: DataTypes.INTEGER,
    nbr_app: DataTypes.INTEGER,
    syndic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Immeuble',
  });
  return Immeuble;
};