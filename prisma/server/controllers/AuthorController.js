const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAuthors = async (req, res) => {
  const authorList = await prisma.author.findMany();

  if (authorList) {
    res.status(200).send(authorList);
  } else {
    res.status(200).send(authorList);
  }
};

const createAuthor = async (req, res) => {
  const { name, nacionality, gender } = req.body;
  const result = await prisma.author.create({
    data: {
      name,
      nacionality,
      gender,
    },
  });
  res.json(result);
};

const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, nacionality, gender } = req.body;
  const selectedAuthor = await prisma.author.update({
    where: { id: Number(id) },
    data: { name, nacionality, gender },
  });
  res.json(selectedAuthor);
};

const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  const selectedAuthor = await prisma.author.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(selectedAuthor);
};

module.exports = { getAuthors, createAuthor, updateAuthor, deleteAuthor };
