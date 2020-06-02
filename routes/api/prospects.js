const express = require('express')
const router = express.Router();

const prospectsCtrl = require('../../controllers/prospects');



router.post('/', checkAuth, prospectsCtrl.create)



function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
