const port = 8000;
const baseURL = `http://localhost:${port}`;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const express = require("express");
const cors = require("cors");

const bookRouter = require("./routes/BookRouter");
const authorRouter = require("./routes/AuthorRouter");

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/authors", authorRouter);
  app.use("/books", bookRouter);

  app.get("/", (req, res) => {
    res.send("It works");
  });

  app.listen(port, () => {
    console.log(`Listen on ${baseURL}`);
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
