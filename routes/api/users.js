const express = require('express');
const router = express.Router();

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup)



/*---------- Protected Routes ----------*/


module.exports = router;