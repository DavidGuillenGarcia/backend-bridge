const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");

const User = require("../models/users");

const login = async (req, res) => {
  const { username, password } = req.body;

  const userLogging = await User.findOne({ username: username }).exec();
  if (!userLogging) {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }
  console.log(userLogging);
  const match = await bcrypt.compare(password, userLogging.password);
  if (match) {
    const token = jwt.sign({ userId: userLogging._id }, JWT_SECRET);
    console.log(userLogging._id);
    res.status(200).json({ token });
  } else {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }
};

const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password);

  const newUser = new User({
    username: username,
    password: hashedPassword,
  });
  await newUser.save();

  res.send(newUser);
};

module.exports = { login, register };
