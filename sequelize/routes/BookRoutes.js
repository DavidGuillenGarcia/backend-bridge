const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");

router.get("/", BookController.getBooks);
router.post("/", BookController.createBook);

module.exports = router;
