'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instruction = sequelize.define('Instruction', {
    name: DataTypes.TEXT,
    name: DataTypes.INTEGER,
    name: DataTypes.INTEGER
  }, {});
  Instruction.associate = function(models) {
    Instruction.belongsTo(models.Recipe, {
      foreignKey: 'recipeId'
    })
  };
  return Instruction;
};
