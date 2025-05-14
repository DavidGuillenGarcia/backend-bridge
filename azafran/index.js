const port = 8000;

const cors = require("cors");
const express = require("express");
const { Connection } = require("./Connection");

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const db = await Connection();
  const collection = db.collection("products");

  const first = await collection.findOne();
  console.log(first);

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
};

main();
