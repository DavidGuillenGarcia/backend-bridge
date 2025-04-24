const port = 8000;
const baseURL = `http://localhost:${port}`;

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "pruebaDB",
});

db.connect();

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
