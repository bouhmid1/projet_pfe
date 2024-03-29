'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Facture.init({
    montantTot: DataTypes.DOUBLE,
    dateEmission: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Facture',
  });
  return Facture;
};