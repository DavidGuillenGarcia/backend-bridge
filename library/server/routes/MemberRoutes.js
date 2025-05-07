const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/MemberController");

router.get("/", MemberController.getMembers);
router.post("/", MemberController.createMember);

module.exports = router;
