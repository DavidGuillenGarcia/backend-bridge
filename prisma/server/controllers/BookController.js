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
  const selectedAuthor = await prisma.author.findFirst(
    { select: { id: true } },
    { where: { name: author_name } }
  );

  const selectedAuthorId = selectedAuthor.id;

  const result = await prisma.book.create({
    data: {
      title,
      length,
      description,
      author_id: selectedAuthorId,
    },
  });
  res.json(result);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, length, author_name, description } = req.body;
  const selectedAuthor = prisma.author.findFirst(
    { select: { id: true } },
    { where: { name: author_name } }
  );
  const selectedAuthorId = selectedAuthor.id;

  const selectedBook = await prisma.book.update({
    where: { id: Number(id) },
    data: { title, length, author_id: selectedAuthorId, description },
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
