const port = 8000;
const baseURL = `http://localhost:${port}`;
const database = "pruebaDB";
const user = "root";
const password = "root1234";

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
const app = express();

app.use(express.json());
app.use(cors());

const sequelize = new Sequelize(database, user, password, {
  host: "localhost",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
