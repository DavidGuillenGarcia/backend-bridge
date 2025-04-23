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
  const cityName = req.body.name;
  const country = req.body.country;

  let sql = `INSERT INTO cities (name, country) values ("${cityName}",'${country}')`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send("City created");
    }
  });
});

app.put("/cities/:id", (req, res) => {
  const cityName = req.body.name;
  const country = req.body.country;
  const id = req.params.id;

  let sql = `UPDATE cities SET name = '${cityName}', country = '${country}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      res.send("City updated");
    }
  });
});

app.delete("/cities/:id", (req, res) => {
  const cityId = req.params.id;
  let sql = `DELETE FROM cities WHERE (id) = ${cityId}`;
  db.query(sql, (error, result) => {
    if (error) throw error;
    if (result.affectedRows > 0) {
      res.send("Deleted city");
    } else {
      res.status(404).send("City not found");
    }
  });
});

db.connect();

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
