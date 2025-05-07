const Member = require("../models/Loan");

const getMembers = async (req, res) => {
  const memberList = await Member.findAll();
  res.status(200).send(memberList);
};

exports.getMembers = getMembers;
