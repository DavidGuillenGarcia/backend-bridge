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
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {}
);

Book.sync();

module.exports = Book;
