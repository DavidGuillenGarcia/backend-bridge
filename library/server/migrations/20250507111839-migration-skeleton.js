"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("Loans", {
      // other attributes
      return_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("ModelName");
  },
};
