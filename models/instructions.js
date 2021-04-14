'use strict';
module.exports = (sequelize, DataTypes) => {
  const Instructions = sequelize.define('Instructions', {
    name: DataTypes.TEXT,
    name: DataTypes.INTEGER,
    name: DataTypes.INTEGER
  }, {});
  Instructions.associate = function(models) {
    // associations can be defined here
  };
  return Instructions;
};