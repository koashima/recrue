const User = require('../models/user');

signup = async (req, res) => { 
  const user = new User(req.body);
  try {
   await user.save();
   res.status(201).json();
  } catch(err) {
    res.status(400).json();
  }
};

module.exports = { 
  signup,
  logout,
};