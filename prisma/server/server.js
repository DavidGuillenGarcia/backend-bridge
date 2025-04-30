const port = 8000;
const baseURL = `http://localhost:${port}`;

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/BookRoutes");
const db = require("./connection");

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/books", booksRouter);

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
