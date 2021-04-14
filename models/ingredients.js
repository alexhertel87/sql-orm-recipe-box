'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredients = sequelize.define('Ingredients', {
    name: DataTypes.NUMERIC,
    name: DataTypes.INTEGER,
    name: DataTypes.STRING,
    name: DataTypes.INTEGER
  }, {});
  Ingredients.associate = function(models) {
    // associations can be defined here
  };
  return Ingredients;
};