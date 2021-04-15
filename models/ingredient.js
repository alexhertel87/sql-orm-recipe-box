'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.NUMERIC,
    name: DataTypes.INTEGER,
    name: DataTypes.STRING,
    name: DataTypes.INTEGER
  }, {});
  Ingredient.associate = function(models) {
    Ingredient.belongsTo(models.Recipe, {
      foreignKey: 'recipeId'
    })
    Ingredient.belongsTo(models.MeasurementUnit, {
      foreignKey: 'measureUnitId'
    })
  };
  return Ingredient;
};
