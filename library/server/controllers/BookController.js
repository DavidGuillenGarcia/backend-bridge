const Book = require("../models/Book");

const getBooks = async (req, res) => {
  const bookList = await Book.findAll();
  res.status(200).send(bookList);
};

const createBook = async (req, res) => {
  const createdBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    publish_date: req.body.publication_year,
    stock: req.body.stock,
  });
  if (createBook) {
    res.status(201).send({ id: createdBook.id });
  } else {
    res.send(res);
  }
};

const updateBook = async (req, res) => {
  const selectedBook = await Book.findByPk(req.params.id);
  selectedBook.title = req.body.title;
  selectedBook.author = req.body.author;
  selectedBook.publication_year = req.body.publication_year;
  selectedBook.stock = req.body.stock;

  await selectedBook.save();
  res.status(200).send({ id: selectedBook.id });
};

const deleteBook = async (req, res) => {
  const selectedBook = await Book.findByPk(req.params.id);

  await selectedBook.destroy();
  res.status(200).send({ id: selectedBook.id });
};

exports.createBook = createBook;
exports.getBooks = getBooks;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
