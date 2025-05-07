const database = "libraryDB";
const user = "root";
const password = "root1234";

const { Sequelize } = require("sequelize");

const connectDB = () => {
  const sequelize = new Sequelize(database, user, password, {
    host: "localhost",
    dialect: "mysql",
  });

  try {
    sequelize.authenticate().then();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  return sequelize;
};

const db = {};

db.sequelize = connectDB();

module.exports = db;
