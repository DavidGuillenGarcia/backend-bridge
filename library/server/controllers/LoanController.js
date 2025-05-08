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

const returnBook = async (req, res) => {
  const actualTime = new Date();
  const selectedLoan = await Loan.findAll({
    where: {
      BookId: req.query.BookId,
    },
  });

  selectedLoan[0].return_date = actualTime;
  await selectedLoan[0].save();

  res.status(200).send(selectedLoan);
};

module.exports = { getLoans, createLoan, returnBook };
