const Prospect = require('../models/prospect');

module.exports = {
  index,
  create,
  update,
  delete: deleteOne,
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

async function update(req, res) {
  try{
      const updatedProspect = await Prospect.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(200).json(updatedProspect);
  }
  catch(err){
      res.status(500).json(err);
  }
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }, {mode: "cors"}).then(res => res.json());
}
