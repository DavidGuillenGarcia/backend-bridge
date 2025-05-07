// const Author = require("../models/Author");
// const Book = require("../models/Book");

// const getBooks = async (req, res) => {
//   const bookList = await Book.findAll();
//   res.status(200).send(bookList);
// };

// const createBook = async (req, res) => {
//   const selectedAuthor = await Author.findOne({
//     where: { name: req.body.author_name },
//   });
//   console.log(selectedAuthor);
//   const createdBook = await Book.create({
//     title: req.body.title,
//     AuthorId: selectedAuthor.id,
//     length: req.body.length,
//     description: req.body.description,
//   });
//   if (createBook) {
//     res.status(201).send({ id: createdBook.id });
//   } else {
//     res.send(res);
//   }
// };

// const updateBook = async (req, res) => {
//   const selectedBook = await Book.findByPk(req.params.id);
//   selectedBook.title = req.body.title;
//   selectedBook.AuthorId = req.body.author_id;
//   selectedBook.length = req.body.length;
//   selectedBook.description = req.body.description;

//   await selectedBook.save();
//   res.status(200).send({ id: selectedBook.id });
// };

// const deleteBook = async (req, res) => {
//   const selectedBook = await Book.findByPk(req.params.id);

//   await selectedBook.destroy();
//   res.status(200).send({ id: selectedBook.id });
// };

// exports.createBook = createBook;
// exports.getBooks = getBooks;
// exports.updateBook = updateBook;
// exports.deleteBook = deleteBook;
