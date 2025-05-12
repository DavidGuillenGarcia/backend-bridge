const Member = require("../models/Member");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const createdMember = await Member.findOne({ where: { username: username } });
  if (!createdMember) {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }

  const match = await bcrypt.compare(password, createdMember.password);
  if (match) {
    res.status(200).send({ llave: createdMember.id });
  } else {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }
};

const registerMember = async (req, res) => {
  const memberName = req.body.name;
  const username = req.body.username;
  const password = req.body.password;

  const hashedPassword = bcrypt.hashSync(password);
  const createdMember = await Member.create({
    name: memberName,
    username: username,
    password: hashedPassword,
    registrationDate: new Date(),
  });
  res.status(201).send({ id: createdMember.id });
};

exports.registerMember = registerMember;
exports.login = login;
