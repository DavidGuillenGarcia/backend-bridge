const db = require("../connection");
const { DataTypes } = require("sequelize");

const Author = db.sequelize.define(
  "Author",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    nacionality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);

Author.sync();

module.exports = Author;
