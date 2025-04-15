const port = 5376;
const baseURL = `http://localhost:${port}`;
const data = require("./data.json");

const express = require("express");
const cors = require("cors");

let animals = data.animals;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/animals", (req, res) => {
  res.send(animals);
});

app.post("/animals", (req, res) => {
  animals.push({
    name: req.body.name,
    strength: req.body.strength,
  });
  res.sendStatus(200);
  console.log(req.body);
});

app.get("/animals/:id", (req, res) => {
  res.send(animals[req.params.id]);
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
