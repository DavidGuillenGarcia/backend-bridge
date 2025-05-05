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
      allowNull: false,
      notEmpty: true,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {}
);

Author.sync();

module.exports = Author;
