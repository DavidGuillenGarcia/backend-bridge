const db = require("../connection");
const { DataTypes } = require("sequelize");

const Book = db.sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);

module.exports = Book;
