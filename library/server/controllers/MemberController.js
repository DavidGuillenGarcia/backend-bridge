const Member = require("../models/Member");

const getMembers = async (req, res) => {
  const memberList = await Member.findAll();
  res.status(200).send(memberList);
};

const createMember = async (req, res) => {
  const actualTime = new Date();
  const createdMember = await Member.create({
    name: req.body.name,
    registration_date: actualTime,
  });
  if (createdMember) {
    res.status(201).send({ id: createdMember.id });
  } else {
    res.send(res);
  }
};

const updateMember = async (req, res) => {
  const selectedMember = await Member.findByPk(req.params.id);
  selectedMember.name = req.body.name;
  await selectedMember.save();
  res.status(200).send(selectedMember);
};

const deleteMember = async (req, res) => {
  const selectedMember = await Member.findByPk(req.params.id);

  await selectedMember.destroy();
  res.status(200).send(selectedMember);
};

module.exports = { getMembers, createMember, updateMember, deleteMember };
