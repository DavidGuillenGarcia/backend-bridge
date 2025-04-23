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
    } else {
      res.send(result);
    }
  });
});

app.post("/cities", (req, res) => {
  let sql = `INSERT INTO cities (name, country) values ("${req.body.name}",'${req.body.country}')`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send("City created");
    }
  });
});

app.delete("/cities/:id", (req, res) => {
  let sql = `DELETE FROM cities WHERE (id) = ${req.params.id}`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
      req.send(error);
    } else {
      res.send("Deleted city");
    }
  });
});

db.connect();

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
