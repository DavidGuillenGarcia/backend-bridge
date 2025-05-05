const db = require("../connection");
const { DataTypes } = require("sequelize");
const Author = require("./Author");

const Book = db.sequelize.define(
  "Book",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    length: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {}
);

Book.belongsTo(Author);

Author.hasMany(Book);

Book.sync();

module.exports = Book;
