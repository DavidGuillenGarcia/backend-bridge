const port = 5376;
const baseURL = `http://localhost:${port}`;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listen on ${baseURL}`);
});
