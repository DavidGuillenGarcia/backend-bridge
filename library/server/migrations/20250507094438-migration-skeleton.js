"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("Books", {
      // other attributes
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("ModelName");
  },
};
