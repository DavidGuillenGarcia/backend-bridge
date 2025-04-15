const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = 8080;
let url = `http://localhost:${port}`;

const toUpperCase = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

app.get("/", (req, res) => {
  const data = {
    name: "Goku",
    ki: "27",
  };
  res.send(data);
});

app.get("/my-name/:name", (req, res) => {
  res.send(
    `Hello ${toUpperCase(req.params.name)} ${toUpperCase(
      req.query.surname
    )}, your name + surname are  ${
      req.params.name.length + req.query.surname.length
    } characters total.`
  );
});

app.get("/my-name/", (req, res) => {
  res.send(`Hello ${toUpperCase(req.query.surname)}`);
});

app.listen(port, () => {
  console.log(`Listening on ${url}`);
});
