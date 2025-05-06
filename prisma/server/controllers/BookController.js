const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getBooks = async (req, res) => {
  const bookList = await prisma.book.findMany();

  if (bookList) {
    res.status(200).send(bookList);
  } else {
    res.status(200).send(bookList);
  }
};

const createBook = async (req, res) => {
  const { title, length, author_name, description } = req.body;
  const selectedAuthorId = await prisma.author.findMany({
    where: { name: author_name },
  });

  const createdBook = await prisma.book.create({
    data: {
      title,
      length,
      description,
      author_id: selectedAuthorId[0].id,
    },
  });

  res.json(createdBook);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, length, author_name, description } = req.body;
  const selectedAuthorId = prisma.author.findMany(
    { select: { id: true } },
    { where: { name: author_name } }
  );

  const selectedBook = await prisma.book.update({
    where: { id: Number(id) },
    data: { title, length, author_id: selectedAuthorId[0].id, description },
  });
  res.json(selectedBook);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const selectedBook = await prisma.book.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(selectedBook);
};

module.exports = { getBooks, createBook, updateBook, deleteBook };
