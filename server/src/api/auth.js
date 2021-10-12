const {Router} = require('express');
const {get_user,login,signup} = require('../controller/authController');
const {tokkenChecker} = require('../middleware/tokkenChecker');
const router = Router();

router.post('/register',signup);
router.post('/login',login);
router.get('/getuser',tokkenChecker,get_user);

module.exports = router;