const Loan = require("../models/Loan");

const getLoans = async (req, res) => {
  const loanList = await Loan.findAll();
  res.status(200).send(loanList);
};

exports.getLoans = getLoans;
