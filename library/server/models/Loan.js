const db = require("../connection");
const { DataTypes } = require("sequelize");
const Book = require("../models/Book");
const Member = require("../models/Member");

const Loan = db.sequelize.define(
  "Loan",
  {
    loan_date: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: true,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: true,
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: false,
    },
  },
  {}
);

Loan.hasMany(Book);
Loan.hasMany(Member);

Loan.sync();

module.exports = Loan;
