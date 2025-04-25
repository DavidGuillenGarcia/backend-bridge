const Book = require("../models/Book");

const getBooks = async (req, res) => {
  const bookList = await Book.findAll();
  res.status(200).send(bookList);
};

const createBook = async (req, res) => {
  const createdBook = await Book.create({
    title: req.body.title,
    description: req.body.description,
    length: req.body.length,
  });
  res.status(201).send({ id: createdBook.id });
};

exports.createBook = createBook;
exports.getBooks = getBooks;
