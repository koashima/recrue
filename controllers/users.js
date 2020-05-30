const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


async function signup(req, res) { 
  const user = new User(req.body);
  try {
   await user.save();
   const token = createJWT(user);
   // {token} below is a shorthand object
   res.json({token});
   res.status(201).json();
  } catch(err) {
    res.status(400).json();
  }
};


function createJWT(user) { 
  return jwt.sign(
    { user }, 
    SECRET,
    { expiresIn: "24h" }
  );
}

module.exports = { 
  signup,
};