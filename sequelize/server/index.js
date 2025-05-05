const port = 8000;
const baseURL = `http://localhost:${port}`;

const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/BookRoutes");
const authorRouter = require("./routes/AuthorRoutes");

const main = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/books", booksRouter);
  app.use("/authors", authorRouter);

  app.get("/", (req, res) => {
    res.send("It works");
  });

  app.listen(port, () => {
    console.log(`Listen on ${baseURL}`);
  });
};

main();
