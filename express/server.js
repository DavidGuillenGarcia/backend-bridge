const express = require("express");

const app = express();
const port = 3000;
let url = `http://localhost:${port}`;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on ${url}`);
});
