'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Instructions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specification: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      listOrder: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      recipeId: {
        allowNull: false,
        references: { model: "Recipes" },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Instructions');
  }
};
