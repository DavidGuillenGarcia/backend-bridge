const port = 5376;
const baseURL = `http://localhost:${port}`;
const data = require("./data.json");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send(data.animals);
});

app.post("/", (req, res) => {
  data.animals.push({
    id: req.body.id,
    name: req.body.name,
    strength: req.body.strength,
  });
  res.sendStatus(201);
});

app.get("/:id", (req, res) => {
  res.send(data.animals[req.params.id]);
});

app.delete("/:id", (req, res) => {
  const idToDelete = Number(req.params.id);
  const filteredAnimals = data.animals.filter(
    (animal) => animal.id !== idToDelete
  );

  if (filteredAnimals.length == data.animals.length) {
    res.sendStatus(404);
  } else {
    data.animals = filteredAnimals;
    res.sendStatus(200);
  }
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
