const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  unit: {
    type: String,
  },
});

module.exports = mongoose.model("Ingredient", ingredientsSchema);
