const mongoose = require("mongoose");

const ingredientsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  unit: {
    type: String,
  },
});

module.exports = mongoose.model("Ingredient", ingredientsSchema);
