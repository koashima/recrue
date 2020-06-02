const Prospect = require('../models/prospect');

module.exports = {
  index,
  create,
};


async function index(req, res) {
  try{
      const prospects = await Prospect.find({});
      res.status(200).json(prospects);
  }
  catch(err){
      res.status(500).json(err);
  }
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const prospect = await Prospect.create(req.body);
  res.status(201).json(prospect);
}