const express = require('express')
const router = express.Router();

const prospectsCtrl = require('../../controllers/prospects');


router.get('/',prospectsCtrl.index);

router.post('/', checkAuth, prospectsCtrl.create)
router.put('/:id', checkAuth, prospectsCtrl.update);
router.delete('/:id', checkAuth, prospectsCtrl.delete);


function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
