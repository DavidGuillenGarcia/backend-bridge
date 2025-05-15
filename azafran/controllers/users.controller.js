const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

const login = async (req, res) => {
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;

  const userLogging = await User.findOne({ username: usernameInput }).exec();
  if (!userLogging) {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }
  console.log(userLogging);
  const match = await bcrypt.compare(passwordInput, userLogging.password);
  if (match) {
    const token = jwt.sign({ userId: User._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } else {
    res.status(404).send("INCORRECT_USERNAME_OR_PASSWORD");
  }
};

const register = async (req, res) => {
  const usernameInput = req.body.username;
  const passwordInput = req.body.password;

  const hashedPassword = bcrypt.hashSync(passwordInput);

  const newUser = new User({
    username: usernameInput,
    password: hashedPassword,
  });
  await newUser.save();

  res.send(newUser);
};

exports.login = login;
exports.register = register;
