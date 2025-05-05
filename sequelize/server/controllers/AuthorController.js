const Author = require("../models/Author");

const getAuthors = async (req, res) => {
  const authorList = await Author.findAll();
  res.status(200).send(authorList);
};

const createAuthor = async (req, res) => {
  const createdAuthor = await Author.create({
    name: req.body.name,
    nacionality: req.body.nacionality,
    gender: req.body.gender,
  });
  if (createAuthor) {
    res.status(201).send({ id: createdAuthor.id });
  } else {
    res.send(res);
  }
};

const updateAuthor = async (req, res) => {
  const selectedAuthor = await Author.findByPk(req.params.id);
  selectedAuthor.name = req.body.name;
  selectedAuthor.nacionality = req.body.nacionality;
  selectedAuthor.gender = req.body.gender;

  await selectedAuthor.save();
  res.status(200).send({ id: selectedAuthor.id });
};

const deleteAuthor = async (req, res) => {
  const selectedAuthor = await Author.findByPk(req.params.id);

  await selectedAuthor.destroy();
  res.status(200).send({ id: selectedAuthor.id });
};

exports.createAuthor = createAuthor;
exports.getAuthors = getAuthors;
exports.updateAuthor = updateAuthor;
exports.deleteAuthor = deleteAuthor;
