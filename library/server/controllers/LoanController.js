const Loan = require("../models/Loan");
const Member = require("../models/Member");
const Book = require("../models/Book");

const getLoans = async (req, res) => {
  const loanList = await Loan.findAll();
  res.status(200).send(loanList);
};

const createLoan = async (req, res) => {
  const actualTime = new Date();
  const deadline = new Date(actualTime.getTime() + 14 * 24 * 60 * 60 * 1000);
  const selectedBook = await Book.findOne({
    where: { title: req.body.book_name },
  });
  const selectedMember = await Member.findOne({
    where: { name: req.body.member_name },
  });
  const createdLoan = await Loan.create({
    loan_date: actualTime,
    deadline: deadline,
    BookId: selectedBook.id,
    MemberId: selectedMember.id,
  });
  if (createdLoan) {
    res.status(201).send(createdLoan);
  } else {
    res.send(res);
  }
};

exports.getLoans = getLoans;
exports.createLoan = createLoan;
