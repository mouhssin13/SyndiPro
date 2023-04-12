'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paimentMensuel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  paimentMensuel.init({
    num_app: DataTypes.INTEGER,
    mois: DataTypes.STRING,
    montant: DataTypes.DOUBLE,
    statu: DataTypes.BOOLEAN,
    owner: DataTypes.STRING,
    ownerID: DataTypes.INTEGER,
    ownerImage: DataTypes.STRING,
    immeuble: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paimentMensuel',
  });
  return paimentMensuel;
};