const db = require("../connection");
const { DataTypes } = require("sequelize");

const Member = db.sequelize.define(
  "Member",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
      notEmpty: true,
    },
  },
  {}
);

Member.sync();

module.exports = Member;
