const express = require("express");
const membersController = require("../controllers/members.controller");
const router = express.Router();

router.post("/", membersController.registerMember);

module.exports = router;
