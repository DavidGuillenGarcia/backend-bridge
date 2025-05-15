const express = require("express");
const router = express.Router();
const ingredientsController = require("../controllers/ingredients.controller");

router.get("/", ingredientsController.getAllIngredients);
router.post("/", ingredientsController.createIngredient);
router.patch("/", ingredientsController.updateQuantity);

module.exports = router;
