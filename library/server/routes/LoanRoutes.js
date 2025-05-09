const express = require("express");
const router = express.Router();
const LoanController = require("../controllers/LoanController");

router.get("/", LoanController.getLoans);
router.post("/", LoanController.createLoan);
router.patch("/", LoanController.returnBook);
router.get("/:MemberId", LoanController.getAllLoansPerMember);

module.exports = router;
