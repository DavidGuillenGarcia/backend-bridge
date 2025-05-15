const Ingredient = require("../models/ingredients");

const createIngredient = async (req, res) => {
  const newIngredient = new Ingredient(req.body);
  const match = await Ingredient.findOne({ name: newIngredient.name });
  if (match) {
    res.send("Ingredient already exists");
  } else {
    await newIngredient.save();
    res.send(newIngredient);
  }
};

const updateQuantity = async (req, res) => {
  const nameInput = req.body.name;
  const quantityInput = req.body.quantity;
  const selectedIngredient = await Ingredient.findOne({ name: nameInput });
  selectedIngredient.quantity = quantityInput;
  await selectedIngredient.save();

  res.send(selectedIngredient);
};

const getAllIngredients = async (req, res) => {
  const allIngredients = await Ingredient.find();
  if (allIngredients) {
    res.send(allIngredients);
  } else {
    res.send("Error");
  }
};

exports.createIngredient = createIngredient;
exports.updateQuantity = updateQuantity;
exports.getAllIngredients = getAllIngredients;
