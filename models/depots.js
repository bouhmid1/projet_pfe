'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Depots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Depots.init({
    nom: DataTypes.STRING,
    adresse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Depots',
  });
  return Depots;
};