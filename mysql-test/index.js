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
  database: "testNodeJS",
});

app.get("/", (req, res) => {
  res.send("Wroks!");
});

app.get("/cities", (req, res) => {
  let sql = `SELECT * FROM cities`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.send(result);
      res.sendStatus(200);
    }
  });
});

app.post("/cities", (req, res) => {
  let sql = `INSERT INTO cities (name, country) values ("${req.body.name}",'${req.body.country}')`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
});

db.connect();

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
