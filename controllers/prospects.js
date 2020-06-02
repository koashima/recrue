const Prospect = require('../models/prospect');

module.exports = {
  create,
};



async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const prospect = await Prospect.create(req.body);
  res.status(201).json(prospect);
}