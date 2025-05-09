const Loan = require("../models/Loan");
const Member = require("../models/Member");
const Book = require("../models/Book");
const { Op } = require("sequelize");

const getLoans = async (req, res) => {
  const MemberId = req.query.MemberId;
  const pendingReturn = req.query.pendingReturn;

  if (!MemberId) {
    getAllLoans(req, res);
  }

  if (MemberId != undefined) {
    if (pendingReturn === undefined) {
      getAllLoansPerMember(req, res);
    }
    if (pendingReturn === "true") {
      getAllActiveLoansPerMember(req, res);
    }
    if (pendingReturn === "false") {
      getAllCompleteLoansPerMember(req, res);
    }
  }
};

const getAllLoans = async (req, res) => {
  const loanList = await Loan.findAll();
  res.send(loanList);
};

const createLoan = async (req, res) => {
  const currentDate = new Date();
  const deadline = new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000);
  const selectedBook = await Book.findOne({
    where: { title: req.body.book_name },
  });
  const selectedMember = await Member.findOne({
    where: { name: req.body.member_name },
  });
  const createdLoan = await Loan.create({
    loan_date: today,
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
      return_date: null,
    },
  });

  selectedLoan[0].return_date = actualTime;
  await selectedLoan[0].save();

  res.status(200).send(selectedLoan);
};

const getAllLoansPerMember = async (req, res) => {
  const memberLoans = await Loan.findAll({
    where: {
      MemberId: req.query.MemberId,
    },
  });
  res.status(200).send(memberLoans);
};

const getAllActiveLoansPerMember = async (req, res) => {
  const activeMemberLoans = await Loan.findAll({
    where: {
      MemberId: req.query.MemberId,
      return_date: null,
    },
  });
  res.status(200).send(activeMemberLoans);
};

const getAllCompleteLoansPerMember = async (req, res) => {
  const completeMemberLoans = await Loan.findAll({
    where: {
      MemberId: req.query.MemberId,
      return_date: {
        [Op.not]: null,
      },
    },
  });
  res.status(200).send(completeMemberLoans);
};

module.exports = { getLoans, createLoan, returnBook, getAllLoansPerMember };
