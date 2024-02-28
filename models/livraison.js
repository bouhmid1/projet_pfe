'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livraison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livraison.init({
    dateLivraison: DataTypes.DATE,
    statut: DataTypes.STRING,
    modeLivraison: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Livraison',
  });
  return Livraison;
};