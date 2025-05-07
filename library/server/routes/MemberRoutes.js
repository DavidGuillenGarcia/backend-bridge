const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/MemberController");

router.get("/", MemberController.getMembers);

module.exports = router;
