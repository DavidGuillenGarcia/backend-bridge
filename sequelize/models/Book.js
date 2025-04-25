const db = require("../connection");
const { DataTypes } = require("sequelize");

const Book = db.sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
    },
  },
  {}
);

Book.sync();

module.exports = Book;
