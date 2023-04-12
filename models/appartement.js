'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appartement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appartement.init({
    num_app: DataTypes.INTEGER,
    type: DataTypes.STRING,
    etage: DataTypes.INTEGER,
    montantM: DataTypes.DOUBLE,
    immeuble: DataTypes.STRING,
    owner: DataTypes.STRING,
    ownerID: DataTypes.INTEGER,
    ownerImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appartement',
  });
  return appartement;
};