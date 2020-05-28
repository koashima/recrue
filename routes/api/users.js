const express = require('express');
const router = express.Router();


router.post('/signup', usersCtrl.signup)

module.exports = router;