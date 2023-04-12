'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    cin: DataTypes.STRING,
    nom: DataTypes.STRING,
    image: DataTypes.STRING,
    tel: DataTypes.STRING,
    immeuble: DataTypes.STRING,
    nbr_app: DataTypes.INTEGER,
    isAdmin: DataTypes.BOOLEAN,
    president: DataTypes.STRING,
    vice_president: DataTypes.STRING,
    tresorie: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};