const port = 8000;
const baseURL = `http://localhost:${port}`;

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const bookRouter = require("./routes/BookRoutes");
const memberRouter = require("./routes/MemberRoutes");
const loanRouter = require("./routes/LoanRoutes");

const main = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/books", bookRouter);
  app.use("/members", memberRouter);
  app.use("/loans", loanRouter);

  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.get("/", (req, res) => {
    res.send("It works");
  });

  app.listen(port, () => {
    console.log(`Listen on ${baseURL}`);
  });
};

main();
