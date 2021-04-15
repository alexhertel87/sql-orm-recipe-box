'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo()
  };
  return Recipe;
};
