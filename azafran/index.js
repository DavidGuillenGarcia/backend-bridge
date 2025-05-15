const port = 8000;

const cors = require("cors");
const express = require("express");
const dbConnection = require("./dbConnection");

const usersRouter = require("./routes/users.routes");
const ingredientsRouter = require("./routes/ingredients.routes");

const main = async () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use("/", usersRouter);
  app.use("/ingredients", ingredientsRouter);

  dbConnection();

  app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
  });
};

main();
